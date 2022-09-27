import React from 'react'
import classes from "./SPSShero.module.css";
import SPSS from "../../asset/bgg.jpg";

const SPSShero = () => {
  return (
    <div className={classes.Container}>
    <div className={classes.ServiceHero}>
      <img src={SPSS} alt="/" />
      <div className={classes.overlay}></div>
      <div className={classes.content}>
        <h1>Data Analysis</h1>
        <p>HOME / SPSS</p>
      </div>
    </div>
  </div>
  )
}

export default SPSShero