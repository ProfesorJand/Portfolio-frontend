const dotenv = require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const sendEmail = require("./utils/sendEmail");

const app = express();

//Middleware
app.use(express.json())
app.use(bodyparser.json())
app.use(cors())

//Routes
app.get("/",async (req,res)=>{
    res.send("Home Page")
})

app.post("/sendEmail", async (req,res)=>{
    const {email, subject, emailMessage} = req.body;
    console.log(email)
    console.log(subject)
    console.log(emailMessage)
    try {
        const send_to = email;
        const sent_from = process.env.EMAIL_USER;
        const reply_to = email;
        if(!subject){
            subject = `${email} Contact from Github Portfolio`
        }
        const message = `
            <h3>Email from: ${email}</h3>
            <p>${emailMessage}</p>
        `
        await sendEmail(subject, message, send_to, sent_from, reply_to);
        res.status(200).json({success: true, message: "Email Sent"});
    } catch (error) {
        res.status(200).json({success: false, message: error.message})
        
    }

})

const PORT = process.env.PORT || 3001;

app.listen(PORT,()=>{
    console.log(`Server listening at port ${PORT}...`)
})
