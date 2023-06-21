import React from "react";
import classes from "./ContactHero.module.css";
import Logo from "../../asset/contact-hero.svg";
import {Link} from 'react-router-dom'

// import Email from "../../asset/contact-email.svg";
// import Whatsapp from "../../asset/contact-whatsapp.svg";


const ContactHero = () => {
  return (
    <div className={classes.ContactHero}>
      <img src={Logo} alt="/" />
      <div className={classes.overlay}></div>
      <div className={classes.content}>
        <h1>Contact Us </h1>
        <p>
          Institute driven with passion to affect lives in the world of data
          analytics and research
        </p>
        <div className={classes.contentFlex}>
        <div className={classes.content1}>
          <Link to="/form">
            <button>
              Send Us Email
            </button>
            </Link>
        </div>
          <div className={classes.content2}>
            <a href="https://wa.link/iy94j6">
              <button>
                Whatsapp
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
