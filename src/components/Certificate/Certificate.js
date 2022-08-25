import React from "react";
import classes from "./Certificate.module.css";
import Excel from "../../asset/okagbue.svg";
import Analysis from "../../asset/gyang.svg";
import Research from "../../asset/jonathan.svg";
import CertificateProps from "../CertificateProps/CertificateProps";


const Certificate = () => {
  return (
    <div className={classes.servicesContainer}>
      <div className={classes.servicesHead}>
        <h2>Certification</h2>
      </div>
      <div className={classes.services}>
        <CertificateProps
          bgImg={Excel}
          text="Okagbue Chioma Esther"
          content="Quantitative data analysis with SPSS"
        />
        <CertificateProps
          bgImg={Analysis}
          text="Gyang Kelvin Kim"
          content="Quantitative data analysis with SPSS"
        />
        <CertificateProps
          bgImg={Research}
          text="Jonathan Jack"
          content="Quantitative data analysis with SPSS"
        />
      </div>
    </div>
  );
};

export default Certificate;
