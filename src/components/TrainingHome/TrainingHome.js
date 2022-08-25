import React from "react";
import classes from "./TrainingHome.module.css";

const TrainingHome = ({
  bgImg,
  text,
  content,
  content2,
  student,
  lesson,
  dollar,
  amount,
  buy,
}) => {
  return (
    <div className={classes.servicesimg1}>
      <div className={classes.servicesimg}>
        <img src={bgImg} alt="/" />
      </div>
      <div className={classes.content}>
        <h3>{text}</h3>
        <div className={classes.partFlex}>
          <div className={classes.part2}>
            <div className={classes.location}>
              <img src={student} alt="/" className={classes.image} />
              <p>{content}</p>
            </div>
            <div className={classes.location}>
              <img src={lesson} alt="/" className={classes.image} />
              <p>{content2}</p>
            </div>
          </div>
          <div className={classes.price}>
            <h3>
              {dollar}
              <span>{amount}</span>
            </h3>
            <button>{buy}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingHome;
