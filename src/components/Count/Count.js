import React from "react";
import classes from "./Count.module.css";
import Instructors from "../../asset/instructor.svg";
import Trainings from "../../asset/348-training.svg";
import Students from "../../asset/1367-students.svg";
import Satisfaction from "../../asset/satisfaction.svg";


const Count = () => {
  return (
    <div className={classes.main}>
      <div className={classes.innerContainer}>
        <div className={classes.coursesContainer}>
        <div className={classes.course1}>
          <img src={Instructors} alt="/" className={classes.footlogo} />
          <p><span>0 </span>Instructors</p>
          </div>
          <div className={classes.course1}>
          <img src={Trainings} alt="/" className={classes.footlogo} />
          <p><span>348+ </span>Trainings</p>
          </div>
          <div className={classes.course1}>
          <img src={Students} alt="/" className={classes.footlogo} />
          <p><span>1,367+ </span>Students</p>
          </div>
          <div className={classes.course1}>
          <img src={Satisfaction} alt="/" className={classes.footlogo} />
          <p><span>99% </span>Satisfaction Rate</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Count;
