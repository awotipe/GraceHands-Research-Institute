import React from "react";
import classes from "./SPSS.module.css";
import Flyer from "../../asset/spss.jpg";
import Analysis from "../../asset/analysis.svg";
import Curriculum from "../../asset/spssCurri.jpg";
import SPSShero from "../../components/SPSShero/SPSShero";
import Certificate from "../../components/Certificate/Certificate";

const SPSS = () => {
  return (
    <div className={classes.Container}>
        <SPSShero/>
      <div className={classes.innerContainer}>
        <div className={classes.contentBigimg}>
          <img src={Flyer} alt="/" />
        </div>
        <h2>Why You Need A Digital Skill Like Data Analysis</h2>
        <div className={classes.content}>
          <div className={classes.contentText}>
            <p>
              I was also once a broke student before I made these three
              discoveries, but the third discovery changed my financial life as
              a student when I was in 200 level. The discoveries are:
            </p>
            <li>
              To make money online as a student, you need to develop a growth
              mindset.
            </li>
            <li>
              You need to transition from the Job economy into the skill
              economy.
            </li>
            <li>You need to learn and wealth making skill</li>
            <h3>What is data analysis and who is a data analyst</h3>
            <p>
              The discovery of Data Analysis changed my finance as a student.
              Data Analysis is one of the high-income digital skills of the 21st
              century that allows you to earn while you learn just by analyzing
              the final year projects, Masters and Ph.D.'s work as well as
              Organizational Data with SPSS.
            </p>
            <p>
              It's a skill that required no huge capital to acquire. All you
              need is to Gather data, Analyze data and Make Money... It's that
              simple.
            </p>
            <p>
              But do you know... that you can pick up, master, and sell this
              skill in a month even if you have zero knowledge about Data
              Analysis.
            </p>
            <h3>How to start learning?</h3>
            <p>
              Ready to learn Data Analysis but don't know how to start?... Then
              you need to read the next paragraph!
            </p>
          </div>
          <div className={classes.contentVideo}>
            <p>
              Ever heard of GraceHands Research Institute? This is a Research
              Institute that's ready to help you develop this skill ( Data
              Analysis) in just a MONTH.
            </p>
            <p>
              GraceHands Research Institute is setting up a complete training on
              Data analysis called QUANTITATIVE ANALYSIS WITH SPSS +
              Certification. This course is from Beginner to Advance level that
              is why it is called a Total Package Course.
            </p>
            <p>
              This training will equip you on how to Analyze organizational
              level Data, Final Year projects, and also Masters and Ph.D. Data.
            </p>
            <div className={classes.contentImg}>
              <img src={Analysis} alt="/" />
            </div>
            <div className={classes.contentBtn}>
              <a href="https://wa.link/iy94j6">
                <button className={classes.btn1}>Get Started</button>
              </a>
            </div>
          </div>
        </div>
        <h2>Quantitative Analysis With SPSS Training Course</h2>
        <div className={classes.content}>
          <div className={classes.contentText}>
            <p>
              This is a course designed to teach and coach undergraduates,
              postgraduates, government servants, farmers, entrepreneurs,
              aspiring data analysts, and researchers how to effectively use
              SPSS software to analyze data.
            </p>
            <h3>Highlight Of The Course (3 Core Masterings)</h3>
            <h4>
              Mastering How To Analyze Data With Various Analysis Techniques For
            </h4>
            <li>Undergraduates</li>
            <li>Post graduate (Masters or PHD)</li>
            <li>Organizations</li>

            <h4>Mastering The Research Aspect Of Data Analysis</h4>
            <li>Data interpretations</li>
            <li>Discussion of results</li>
            <li>Designing of questionnaire</li>
            <li>Research methodology</li>
            <li>Writing of report for organization</li>
            <li>Understanding hypothesis testing</li>
          </div>

          <div className={classes.contentVideo}>
            <h4>Mastering Marketing Side Of The Skill</h4>
            <li>How to get customer for your service</li>
            <li>How to retain them</li>
            <li>Determining the cost for your services</li>
            <li>The marketing skills you need to master etc</li>

            <div className={classes.contentvid}>
              <img src={Analysis} alt="/" />
            </div>
            <div className={classes.contentBtn}>
              <a href="https://youtu.be/qWJDrSxFjXY">
                <button className={classes.btn1}>See Video</button>
              </a>
            </div>
          </div>
        </div>

        <h2>Training Curriculum</h2>
        <div className={classes.contentImg2}>
          <img src={Curriculum} alt="/" />
        </div>
        <h3>Schedule Of The Training</h3>
        <p>The training is divided into these aspects</p>

        <p>
          <strong>Lectures:</strong> Will only take place Fridays,
          Saturdays and Sundays
        </p>
        <p>
          <strong>Practicals:</strong> These is done through a pre-recorded
          video called step by step practical videos and participants have a
          week to watch and practice them (Mondays - Fridays)
        </p>
        <p>
          <strong>Assignments:</strong> Without assignments students will lack
          development. The time period for assignments is during the week while
          watching the practical videos *Also a month will be given to complete
          all assignments before issuing our certificate.
        </p>
        <p>
          <strong>Note:</strong> You are permitted to take excuse during the
          training if there is an urgent situation. There is provision of *Re-do
          classes* for those that were unavailable during the training.
        </p>
        <div className={classes.contentBtn}>
          <a href="https://wa.link/iy94j6">
            <button className={classes.btn1}>Get Started</button>
          </a>
        </div>
      </div>
        <Certificate/>
        <p>Certificate will only be given a month after conclusion of the training
        to students that has completed 60% of the training assessment
        (assignments)</p> 
        
        <p><strong>Payment:</strong> The training fee is 15,000 naira as seen on the
        flier. For more enquiry kindly click the link below or send us a message on our
        hotlines. Thank you!</p>
        <div className={classes.contentBtn1}>
          <a href="https://wa.link/iy94j6">
            <button className={classes.btn1}>Get Started</button>
          </a>
        </div>
    </div>
  );
};

export default SPSS;
