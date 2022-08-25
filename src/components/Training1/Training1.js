import React from 'react'
import classes from "./Training1.module.css";
import Excel from "../../asset/excel.svg";
import Analysis from "../../asset/analysis.svg";
import Research from "../../asset/research-training.svg";
import Students from "../../asset/student.svg";
import Lessons from "../../asset/lesson.svg";
import TrainingHome from "../TrainingHome/TrainingHome";

const Training = () => {
  return (
    <div className={classes.servicesContainer}>
        <div className={classes.services}>
        <TrainingHome
          bgImg={Excel}
          text="Excel Training + Certificate"
          student={Students}
          lesson={Lessons}
          content="340 Students"
          content2="82 Lessons"
          dollar="$"
          amount="50"
          buy="Buy"
        />
        <TrainingHome
          bgImg={Analysis}
          text="Data Analysis + Certificateg"
          student={Students}
          lesson={Lessons}
          content="340 Students"
          content2="82 Lessons"
          dollar="$"
          amount="50"
          buy="Buy"
        />
        <TrainingHome
          bgImg={Research}
          text="Research Training + Certificate"
          student={Students}
          lesson={Lessons}
          content="340 Students"
          content2="82 Lessons"
          dollar="$"
          amount="50"
          buy="Buy"
        />
       </div>
       </div>
  )
}

export default Training;