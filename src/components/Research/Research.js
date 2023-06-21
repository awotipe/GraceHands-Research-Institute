import React from "react";
import classes from "./Research.module.css";
import Flyer from "../../asset/research22.jpg";
import Research1 from "../../asset/research-training.svg";
import Video from "../../asset/researchVid.mp4";
import ResearchHero from "../../components/ResearchHero/ResearchHero";
import Certificate from "../../components/Certificate/Certificate";
import Testimony from "../../components/TestimonyRes/TestimonyRes";
import Navbar from "../../components/Navbar/Navbar"

const Research = () => {
  return (
    <div className={classes.Container}>
      <Navbar/>
      <ResearchHero />
      <div className={classes.innerContainer}>
        <div className={classes.content}>
          <div className={classes.contentText}>
            <p>Hello, there!</p>
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
              <img src={Research1} alt="/" />
            </div>
            <div className={classes.contentBtn}>
              <a href="https://wa.link/iy94j6">
                <button className={classes.btn1}>Register Now!</button>
              </a>
            </div>
          </div>
        </div>
        <div className={classes.contentBigimg}>
          <img src={Flyer} alt="/" />
        </div>
        {/* <p>
        Certificate will only be given a month after conclusion of the training
        to students that has completed 60% of the training assessment
        (assignments)
      </p> */}

      <p>
        <strong>Payment:</strong> The training fee is <strong>FREE</strong> as seen on
        the flier. For more enquiry kindly click the link below or send us a
        message on our hotlines. Thank you!
      </p>
      <div className={classes.vidImage}>
        <video controls autostart src={Video} type="video/mp4" />
        </div>
      <div className={classes.contentBtn1}>
        <a href="https://wa.link/iy94j6">
          <button className={classes.btn1}>Get Started</button>
        </a>
      </div>
{/* 
        <h2>Training Curriculum</h2>
        <h3>Schedule Of The Training</h3>
        <p>The training is divided into these aspects</p>
        <p>
          <strong>Lectures:</strong> Will only take place Fridays, Saturdays and
          Sundays
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
        </div> */}
      </div>
      <Certificate />
      <Testimony/>
    </div>
  );
};

export default Research;
