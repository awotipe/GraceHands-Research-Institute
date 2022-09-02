import React from "react";
import classes from "./ContactHero.module.css";
import Logo from "../../asset/contact-hero.svg";
// import Email from "../../asset/contact-email.svg";
// import Whatsapp from "../../asset/contact-whatsapp.svg";
import { Link } from "react-router-dom";

const ContactHero = () => {
  return (
    <div className={classes.ContactHero}>
      <img src={Logo} alt="/" />
      <div className={classes.overlay}></div>
      <div className={classes.content}>
        <h1>Contact US </h1>
        <p>
          Institute driven with passion to affect lives in the world of data
          analytics and research
        </p>
        <div className={classes.content1}>
          <Link to="/training">
            <button className={classes.btn}>
              {/* <img src={Email} alt="/" /> */}
              Send Us Email
            </button>
          </Link>
          <div className={classes.content2}>
            <a href="https://wa.link/iy94j6">
              <button className={classes.btn}>
                {/* <img src={Whatsapp} alt="/" /> */}
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
