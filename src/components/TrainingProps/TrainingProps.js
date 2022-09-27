import React from "react";
import classes from "./TrainingProps.module.css";
import Excel from "../../asset/excel.svg";
import Analysis from "../../asset/analysis.svg";
import Research from "../../asset/research-training.svg";
import Students from "../../asset/student.svg";
import Lessons from "../../asset/lesson.svg";
import TrainingHome from "../TrainingHome/TrainingHome";
import { Link } from "react-router-dom";

const TrainingProps = () => {
  return (
    <div className={classes.servicesContainer}>
      <div className={classes.servicesHead}>
        <h2>Trainings</h2>
        <p>
          With the resources at our disposal, you can be rest assured that you
          will learn the secrets to life success and becoming an expert
        </p>
      </div>
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
          learn="Learn More"
          where="excel"
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
          learn="Learn More"
          where="SPSS"
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
          learn="Learn More"
          where="research"
        />
       
      </div>
      <div className={classes.viewAll}>
        <Link to="trainingS">
          <button>View All Trainings</button>
        </Link>
      </div>
    </div>
  );
};

export default TrainingProps;
