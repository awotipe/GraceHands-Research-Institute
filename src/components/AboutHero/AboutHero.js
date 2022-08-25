import React from "react";
import classes from "./AboutHero.module.css";
import about from "../../asset/about-hero.svg";

const AboutHero = () => {
  return (
    <div className={classes.Container}>
      <div className={classes.ServiceHero}>
        <img src={about} alt="/" />
        <div className={classes.overlay}></div>
        <div className={classes.content}>
          <h1>About Us</h1>
          <p>HOME / ABOUT US</p>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
