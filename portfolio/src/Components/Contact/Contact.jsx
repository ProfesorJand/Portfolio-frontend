import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Styles from "./contact.module.css";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [protectionEmail, setProtectionEmail] = useState(false);
  const [counterNum, setCounterNum] = useState()

  useEffect(() => {
    success && startCountdown(60)
  }, [success])

  function startCountdown(seconds) {
    let counter = seconds;
    setCounterNum(seconds)
    setProtectionEmail(true)
    const interval = setInterval(() => {
        setCounterNum(counter)
      counter--;
        
      if (counter < 0 ) {
        clearInterval(interval);
        setProtectionEmail(false)
      }
    }, 1000);
  }
  

  async function formHandle(e) {
    e.preventDefault();
    // if (!email) {
    //   alert("Email Missing");
    // } else if (!subject) {
    //   alert("Subject Missing");
    // } else if (!emailMessage) {
    //   alert("Email Message Missing");
    // } else {
    //   await axios
    //     .post(process.env.REACT_APP_BACKEND_SENDEMAIL, {
    //       email,
    //       emailMessage: emailMessage + " Contact from Github Portfolio",
    //       subject,
    //     })
    //     .then((r) => {
    //       setSuccess(r.data.success);
    //     })
    //     .catch((r) => console.log(r.data.success));
    // }
    axios.post("https://portfolio-backend.adaptable.app/sendEmail",{
      email:"rapperboy_63@hotmail.com",
      subject:"testReact",
      emailMessage:"mensaje de prueba React"
    }).then(r=>{console.log(r.data); setSuccess(true)})
    //axios.get("https://portfolio-backend.adaptable.app/").then(r=>console.log(r))
  }
  return (
    <>
        <div className="tituloH2" id="contact">
        <h2>Contact</h2>
        </div>
      <div className={Styles.container}>
        {
        !protectionEmail ?
        <form
          className={Styles.form}
          onSubmit={(e) => {
            formHandle(e);
          }}
        >
          <input
            className={Styles.inputEmail}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
          <br />
          <input
            className={Styles.inputSubject}
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
            minLength="4"
            required
          />
          <br />
          <div className={Styles.DivTextarea}>
            <textarea
              className={Styles.textarea}
              value={emailMessage}
              onChange={(e) => {
                setEmailMessage(e.target.value);
              }}
              placeholder="Message..."
              required
            />
          </div>
          <br />
          <input className={Styles.submit} type="submit" value="Submit"></input>
          
        </form>
        :
        success ? 
        <div className={Styles.divSended}><p>Email sended ✔️</p><p>Please Wait {counterNum} seconds to send another Email</p></div>
        : 
        <div className={Styles.divSended}><p>❌ Email error ❌</p><p>Please Wait {counterNum} seconds to send another Email</p></div>
        }

        
      </div>
    </>
  );
}
