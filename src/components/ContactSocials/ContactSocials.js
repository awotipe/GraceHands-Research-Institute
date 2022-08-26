import React from 'react'
import classes from "./ContactSocials.module.css";
import Address from "../../asset/location-contact.svg";
import Facebook from "../../asset/facebook-contact.svg";
import Instagram from "../../asset/instagram-contact.svg";

const ContactSocials = () => {
  return (
    <div className={classes.contactSocials}>
    <div className={classes.socialAddress}>
      <img src={Address} alt="/" />
      <p>OAU New Market, Zone E, Block 4., Ile-Ife, Nigeria.</p>
      </div>
      <div className={classes.socialFB}>
      <img src={Facebook} alt="/" />
      <p>Gracehands Research Institute</p>
      </div>
      <div className={classes.socialIG}>
      <img src={Instagram} alt="/" />
      <p>Gracehands_research_institute</p>
      </div>
      </div>
  )
}

export default ContactSocials