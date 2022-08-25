import React from "react";
import classes from "./OurServices.module.css";
import Logo from "../../asset/research.svg";
import Logo1 from "../../asset/training.svg";
import Logo2 from "../../asset/data.svg";
import ServicesProps from "../ServicesProps/ServicesProps";

const OurServices = () => {
  return (
    <div className={classes.CoreValue}>
      <div>
        <h2>Our Services</h2>
        <p>
          With the resources at our disposal, you can be rest assured that you
          will learn the secrets to life success and becoming an expert
        </p>
      </div>
      <div className={classes.CoreValueContainer}>
        <ServicesProps
          bgImg={Logo}
          header="Research"
          text="Develop skills for career of various majors including computer"
        />
        <ServicesProps
          bgImg={Logo1}
          header="Training"
          text="Develop skills for career of various majors including computer"
        />
        <ServicesProps
          bgImg={Logo2}
          header="Data Analysis"
          text="Develop skills for career of various majors including computer"
        />
      </div>
    </div>
  );
};

export default OurServices;
