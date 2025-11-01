
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
    const { name, email, age, snow_sport_level }  = req.body;

    // check if name is valid 
    if (!name) {
        return res.status(400).json({error: "Bad request, no name given."})
    }

    // check if email is valid
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
        return res.status(400).json({error: "Bad Request, invalid email request"});
    }


     // check if snow_sport_level is valid 

    const valid_snow_levels = ["Complete Beginner", 'Beginner', "Intermediate", "Advanced"];
   
    if (!snow_sport_level.includes(valid_snow_levels)){
        return res.status(400).json({error: "Bad request, invalid snow sport level selected."})
    }


    // check if age is valid 
    if (!age || age < 1 || age > 100) {
        return res.status(400).json({error: "Bad request, invalid age given."})
    }



    // check if there's a duplicate email in db 
    const {data: existingEmail, error: queryError} = await supabase 
    .from("waitlist")
    .select("id")
    .eq("email", email)
    .maybeSingle();


    
  
  if (queryError) {
      console.error("Supabase query error:", queryError);
      return res.status(500).json({ error: "Database query failed" });
  }
  
    // throw error there is an existing email 
    if (existingEmail) {
        return res.status(409).json({error: "Duplicate email"});
    }

   // try inserting into supabase
    try {
        const {data, error: insertError} = await supabase
        .from('waitlist')
        .insert([{email, name, age, snow_sport_level}])
        .select('id, created_at');

        if (insertError) {
            console.error("Supabase insert error:", insertError);
            return res.status(500).json({ error: insertError.message, details: insertError });
        }

        return res.status(201).json({
            success: true,
            id: data?.[0]?.id,
            created_at: data?.[0]?.created_at,
            name: data?.[0].name,
            age: data?.[0]?.age, 
            snow_sport_level: data?.[0]?.snow_sport_level,
            });
    
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