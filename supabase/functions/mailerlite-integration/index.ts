import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

// setting headers for access
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// setting vars from .env
const SUPABASE_URL = Deno.env.get("SUPABASE_URL") ?? "";
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
const MAILERLITE_API_KEY = Deno.env.get("MAILERLITE_API_KEY") ?? "";
const TABLE_NAME = Deno.env.get("TABLE_NAME") ?? "waitlist";
const EMAIL_COLUMN = Deno.env.get("EMAIL_COLUMN") ?? "email";
const ID_COLUMN = Deno.env.get("ID_COLUMN") ?? "id";
const WEBHOOK_SECRET = Deno.env.get("WEBHOOK_SECRET") ?? "";

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

// if keys are missing throw an error
if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
  throw new Error("Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY");
}

// fetching subscribers with GET call
async function fetchSubscribers(limit = 500) {
  const url = `${SUPABASE_URL}/rest/v1/${TABLE_NAME}?select=${encodeURIComponent(`${ID_COLUMN},${EMAIL_COLUMN}`)}&${EMAIL_COLUMN}=not.is.null&unsubscribed=eq.false&limit=${limit}`;
  const res = await fetch(url, {
    method: "GET",
    headers: {
      apikey: SUPABASE_SERVICE_ROLE_KEY,
      Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`
    }
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch subscribers: ${res.status} ${await res.text()}`);
  }
  return res.json();
}

async function addSubscriberToMailerLite(email: string) {
  const url = "https://api.mailerlite.com/api/v2/subscribers";
  const payload = { email };
  
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-MailerLite-ApiKey": MAILERLITE_API_KEY
    },
    body: JSON.stringify(payload)
  });
  
  return res;
}

async function handleAddSubscriber(req: Request) {
  const secret = req.headers.get("x-function-secret") ?? "";
  if (!WEBHOOK_SECRET || secret !== WEBHOOK_SECRET) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), { 
      status: 401,
      headers: { "Content-Type": "application/json" }
    });
  }

  let payload;
  try {
    payload = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), { 
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }

  const { email } = payload;
  if (!email) {
    return new Response(JSON.stringify({ error: "Missing email" }), { 
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }

  try {
    const resp = await addSubscriberToMailerLite(email);
    const respText = await resp.text();
    
    return new Response(JSON.stringify({ 
      ok: true, 
      status: resp.status,
      message: respText 
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    console.error("Error adding subscriber:", err);
    return new Response(JSON.stringify({ error: String(err) }), { 
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}

async function handleSendAll(req: Request) {
  const secret = req.headers.get("x-function-secret") ?? "";
  if (!WEBHOOK_SECRET || secret !== WEBHOOK_SECRET) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: { "Content-Type": "application/json" }
    });
  }

  try {
    const subs = await fetchSubscribers(500);
    const results = [];
    
    for (const s of subs) {
      try {
        const resp = await addSubscriberToMailerLite(s[EMAIL_COLUMN]);
        results.push({
          email: s[EMAIL_COLUMN],
          status: resp.status
        });
      } catch (e) {
        console.error(`Error adding ${s[EMAIL_COLUMN]}:`, e);
        results.push({
          email: s[EMAIL_COLUMN],
          error: String(e)
        });
      }
    }

    return new Response(JSON.stringify({
      ok: true,
      total: subs.length,
      results
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    console.error("Error in handleSendAll:", err);
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}

async function handleMailerLiteWebhook(req: Request) {
  const raw = await req.text();
  console.log("MailerLite Webhook received:", raw);

  let payload;
  try {
    payload = JSON.parse(raw);
  } catch (e) {
    console.error("Failed to parse webhook payload:", e);
    return new Response(JSON.stringify({ error: "Invalid JSON" }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }

  // Extract email and other info
  const email = 
    payload?.events?.[0]?.data?.subscriber?.email ||
    payload?.subscriber?.email ||
    payload?.data?.subscriber?.email ||
    payload?.data?.email || 
    payload?.data?.attributes?.email || 
    payload?.email;

  if (!email) {
    console.error("No email found in webhook payload:", payload);
    return new Response(JSON.stringify({ 
      error: "No email found in payload",
      received: payload 
    }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }

  console.log(`Processing unsubscribe for email: ${email}`);

  try {
    const { data, error } = await supabase
      .from(TABLE_NAME)
      .update({ unsubscribed: true })
      .eq(EMAIL_COLUMN, email)
      .select();

    if (error) {
      console.error("Supabase update error:", error);
      throw error;
    }

    if (!data || data.length === 0) {
      console.warn(`No record found for email: ${email}`);
      return new Response(JSON.stringify({ 
        ok: true, 
        email,
        warning: "No matching record found in database"
      }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }

    console.log(`Successfully marked ${email} as unsubscribed`);
    return new Response(JSON.stringify({ 
      ok: true, 
      email, 
      updated: data 
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    console.error("Error updating unsubscribe status:", err);
    return new Response(JSON.stringify({ 
      error: String(err),
      email 
    }), { 
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}

console.info("MailerLite-Supabase integration function ready");

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const url = new URL(req.url);
    console.log(`${req.method} ${url.pathname}`);
    
    if (req.method === "GET") {
      return new Response(JSON.stringify({ 
        status: "healthy",
        endpoints: {
          webhook: "POST /webhook/mailer-lite/unsubscribe",
          send: "POST /send",
          addSubscriber: "POST /add-subscriber"
        }
      }), {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" }
      });
    }
    
    // MailerLite unsubscribe webhook
    if (req.method === "POST" && url.pathname.endsWith("/webhook/mailer-lite/unsubscribe")) {
      return await handleMailerLiteWebhook(req);
    }
    
    // Bulk send subscribers to MailerLite
    if (req.method === "POST" && url.pathname.endsWith("/send")) {
      return await handleSendAll(req);
    }
    
    // Add single subscriber to MailerLite
    if (req.method === "POST" && url.pathname.endsWith("/add-subscriber")) {
      return await handleAddSubscriber(req);
    }

    return new Response(JSON.stringify({
      error: "Not found",
      path: url.pathname
    }), {
      status: 404,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    console.error("Unhandled error:", err);
    return new Response(JSON.stringify({
      error: String(err)
    }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
});