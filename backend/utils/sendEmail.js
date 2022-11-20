const dotenv = require("dotenv").config();
const nodemailer = require("nodemailer");

const sendEmail = async (subject, message, send_to, sent_from, reply_to)=>{
    console.log(subject)
 const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 587,
    auth:{
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
    tls: {
        rejectUnauthorized:false,
    }
 })

 const options = {
    from:sent_from,
    to:send_to,
    replyTo:reply_to,
    subject: subject,
    html: message,
 }

 //send EMAIL
 transporter.sendMail(options, function(err,info){
    if(err){
        console.log(err)
    }else{
        console.log(`email sended to: ${send_to}`)
    }
 })
}

module.exports = sendEmail;