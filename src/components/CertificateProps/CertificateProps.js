import React from "react";
import classes from "./CertificateProps.module.css";

const CertificateProps = ({ bgImg, text, content }) => {
  return (
    <div className={classes.servicesimg1}>
      <div className={classes.servicesimg}>
        <img src={bgImg} alt="/" />
      </div>
      <div className={classes.part2}>
        <div className={classes.content}>
          <h3>{text}</h3>
          <div className={classes.location}>
            <p>{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateProps;
