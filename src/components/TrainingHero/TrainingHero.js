import React from 'react'
import Logo from "../../asset/training-hero.svg"
import classes from "./TrainingHero.module.css"

const ServiceHero = () => {
  return (
    <div className={classes.ServiceHero}>
        <img src={Logo} alt="/" />
      <div className={classes.overlay}></div>
      <div className={classes.content}>
            <h1>Trainings</h1>
           <p>
             HOME / TRAININGS
             </p>
           </div>
    </div>
  )
}

export default ServiceHero