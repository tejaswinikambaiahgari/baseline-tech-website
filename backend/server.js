
import dotenv from "dotenv";
dotenv.config();

import { createClient } from '@supabase/supabase-js'
import express from "express";
import cors from "cors"; 


// supabase and express setup
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);
const app = express();
const corsOption = {
    origin:["http://localhost:5173"],
}; app.use(cors(corsOption));
app.use(express.json());

// --- waitlist route --- 
app.post("/api/waitlist", async (req, res) => {
    const { email }  = req.body;

    // check if email is valid
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
        return res.status(400).json({error: "Bad Request, invalid email request"});
    }

    // check if there's a duplicate email in db 
    const {data: existingEmail, error: queryError} = await supabase 
    .from("waitlist")
    .select("id")
    .eq("email", email)
    .maybeSingle();
    .eq('email', email)
    .maybeSingle();

    if (queryError && queryError.code == 'PGRST116') {
        console.log("No duplicate email in db found");
    } else if (queryError) {
        console.log("Supabase error", queryError);
        if (queryError) {
            console.error("Supabase query error:", queryError);
            return res.status(500).json({error: "Database query failed"});
        }
        if (existingEmail) {
            return res.status(409).json({error: "Duplicate email"});
        }

    }
    
    // throw error there is an existing email 
    if (existingEmail) {
        return res.status(409).json({error: "Duplicate email"});
    }

   // try inserting email 
    try {
        const {data, error: insertError} = await supabase
        .from('waitlist')
        .insert([{email}])
        .select('id, created_at');

        if (insertError) {
            console.error("Supabase insert error:", insertError);
            throw insertError;
        }

        console.log("Entry added successfully", email)
        res.status(200).json({success: true});
    
    }
    catch (error) {
        console.log("Error adding email.", error)
        res.status(400).json({error: "Something went wrong.", error});
    }
});

// -- health route ---
app.get("/health", async (req, res) => {
    return res.status(200).json({status : "ok"});

});



// server msg 
app.listen(8080, () =>  {
    console.log("Server started on port 8080");
});