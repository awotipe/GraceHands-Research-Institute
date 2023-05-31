import React, { useRef, useState } from "react";
import Classes from "./ContactForm.module.css";
import Logo from "../../asset/send-img.svg";
import emailjs from '@emailjs/browser';

const Result = () => {
  return (
    <p>Your message has been successfully sent. We will contact you soon.</p>
  );
};
const ContactForm = () => {
  const [result, showResult] = useState (false, true)
  const form = useRef ()
  const sendEmail = (e) => {
    e.preventDefault();
    
      emailjs.sendForm("service_2q7z0ir", "template_djygmpd", form.current, "XVxoIvBVfFj1ViNjy")
      .then(
        (result) => {
          console.log(result.text);
          console.log("Your message has been successfully sent. We will contact you soon.")
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
    showResult(true);
  };
  setTimeout(() => {
    showResult(false);
   },5000 );
  return (
    <div className={Classes.ContactForm}>
      <div className={Classes.ContactForm1}>
        <div className={Classes.address}>
          <h2>Our Office</h2>
        </div>
        <div className={Classes.address}>
          <h3>Address</h3>
          <p>OAU New Market, Zone E, Block 4., Ile-Ife, Nigeria</p>
        </div>
        <div className={Classes.address}>
          <h3>Phone Numbers</h3>
          <p>+2348168181969</p>
        </div>
        <div className={Classes.address}>
          <h3>Website</h3>
          <p>www.gracehandsresearchinstitute.org</p>
        </div>
        <div className={Classes.address}>
          <h3>Email</h3>
          <p>gracehands123@gmail.com</p>
        </div>
      </div>
      <div className={Classes.ContactForm2}>
      <div className={Classes.address}>
          <h2>Drop A Message</h2>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_Name" placeholder="Full Name"></input>
          <input type="text"  name="user_Email" placeholder="Email "></input>
          <input type="text" name="user_Phone" placeholder="Phone "></input>

         
          <div>
            
            <textarea className={Classes.formcontrol} name="message"
            placeholder="Message " required></textarea>
            <br />
            <button className={Classes.btn}>
              <img src={Logo} alt="/" />
              <p>SEND</p>
            </button>
          </div>
          <div className={Classes.row}>{result ? <Result /> : null}</div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
