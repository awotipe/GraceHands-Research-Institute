import React from "react";
import classes from "./ServicesProps.module.css";

const ServicesProps = ({ bgImg, text,header }) => {
  return (
    <div className={classes.servicesimg}>
      <div className={classes.servicesimg1}>
        <img src={bgImg} alt="/" />
        <h3>{header}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ServicesProps;
