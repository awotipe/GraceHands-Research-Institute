import React from 'react';
import classes from './Training.module.css'
import TrainingHero from "../../components/TrainingHero/TrainingHero"
import Training2 from "../../components/Training1/Training1"
import Certificate from "../../components/Certificate/Certificate";
import Analysis from "../../asset/analysis.svg";
import Research from "../../asset/research-training.svg";
import Testimony from "../../components/Testimony/Testimony";




const Training = () => {
  return (
    <div> 
      <TrainingHero/>
      <Training2 />
      <div className={classes.Container}>
      <div className={classes.innerContainer}>
      <h2>Data Analysis</h2>
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
      </div>
    </div>

    <div className={classes.Container}>
      <div className={classes.innerContainer}>
      <h2>Research Training</h2>
        <div className={classes.content}>
          <div className={classes.contentText}>
            <p>
              First, I would love to thank you for your interest in the upcoming
              thesis writing training organised by Grace Hands Research
              Institute.
            </p>
            <p>
              Please, find below the things I've recently find out about
              project writing:
            </p>
            <li>
              Many supervisors don't have the time to tutor their students
              either undergraduate or post graduate students on thesis writing,
              but they expect excellent student projects. Research has it that
              they eventually publish students' project to their own credit.
            </li>
            <li>
              Most thesis submissions are now online due to restrictions on
              physical meetings, which implies an easy plagiarism check upon
              submission. Many students end up re-writing one chapter several
              times due to plagiarism.
            </li>
            <li>
              Also, many students don't know how to go about writing their
              projects, yet they find it difficult to ask for help, while others
              who asked for help end up being duped by quacks who no nothing
              about project writing. I try as much as possible to right these
              wrongs, but remember,
              <strong>
                ignorance is costly especially when you are trying to correct
                your mistakes.
              </strong>
            </li>
            <li>
              While some charge exorbitant rates for project writing, this
              Institute charges N40k - N50k for undergraduate works and a
              minimum of N150k for post graduate works with full plagiarism
              check. Nonetheless, our utmost priority is to satisfy our
              customers.
            </li>
          </div>
          <div className={classes.contentVideo}>
          <p>
              Although, our true joy is in seeing our trainees write their
              theses on their own (because we train them enough to do so), you
              may still decide to outsource the skill after this training.
              Beyond that, every participant will be able to surmount any
              challenge in the process of project writing. Some of these
              challenges include: finding the required journal to use, getting a
              researchable topic and plagiarism reduction, writing literature
              review, citations and references etc
            </p>
            <p>
              Now that you know all of these, why waste any more time waiting?
            </p>
            <p>
              Always remember: proper training like this equips you and makes
              you better at project writing!
            </p>
            <div className={classes.contentImg}>
              <img src={Research} alt="/" />
            </div>
            <div className={classes.contentBtn}>
              <a href="https://wa.link/iy94j6">
                <button className={classes.btn1}>Get Started</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
      <Certificate/>
      <Testimony/>
    </div>
  )
}

export default Training