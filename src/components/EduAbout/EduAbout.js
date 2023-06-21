import React from "react";
import classes from "./EduAbout.module.css";
import Hero from "../../components/EduAboutHero/EduAboutHero";
import Navbar from "../../components/EduHeader/EduHeader";
import image from "../../asset/digital.png";
import Services from '../../components/EduServices/EduServices'


const EduAbout = () => {
  return (
    <div className={classes.container}>
      <Navbar />
      <Hero />
      <div className={classes.textContainer2}>
          <div className={classes.text}>
            <h2>About Us</h2>
            <p>
              At GraceHands Edutech Limited Services, we are passionate about
              empowering individuals and businesses through comprehensive and
              cutting-edge technology education.
            </p>
            <p>
              We are also passionate about
              providing exceptional tech solutions to help businesses thrive in
              the digital age. Our comprehensive range of services includes web
              development, graphic design, digital marketing, video editing, and
              content writing. We are your one-stop destination for all your
              technological needs.
            </p>
          </div>
          <div className={classes.imageContainer}>
            <img src={image} alt="about" />
          </div>
        </div>
        <Services/>
    </div>
  );
};

export default EduAbout;
