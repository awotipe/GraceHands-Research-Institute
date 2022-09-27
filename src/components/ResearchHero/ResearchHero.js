import React from 'react'
import classes from "./ResearchHero.module.css";
import Research from "../../asset/bg-01.jpg";

const ResearchHero = () => {
  return (
    <div className={classes.Container}>
    <div className={classes.ServiceHero}>
      <img src={Research} alt="/" />
      <div className={classes.overlay}></div>
      <div className={classes.content}>
        <h1>Research Training</h1>
        <p>HOME / RESEARCH</p>
      </div>
    </div>
  </div>
  )
}

export default ResearchHero