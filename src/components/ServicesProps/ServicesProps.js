import React from "react";
import Classes from "./ServicesProps.module.css";

const ServicesProps = ({ bgImg, text,header }) => {
  return (
    <div className={Classes.Corevalueimg}>
      <div className={Classes.Corevalueimg1}>
        <img src={bgImg} alt="/" />
        <h3>{header}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ServicesProps;
