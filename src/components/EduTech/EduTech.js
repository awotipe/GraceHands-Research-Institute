import React from "react";
import classes from "./EduTech.module.css";
// import image from './utils';
import { Link } from "react-router-dom";
import Navbar from "../../components/EduHeader/EduHeader";
import image from "../../asset/digital.png";

const EduTech = () => {
  return (
    <section className={classes.container}>
      <Navbar />
      <div className={classes.innerContainer}>
        <div className={classes.bgImage}>
          <div className={classes.textContainer}>
            <div className={classes.bgTitle}>
              <h1 data-aos="fade-down" data-aos-duration="3000">
                Welcome to GraceHands Edu-Tech Limited Services!
              </h1>
              <p data-aos="fade-up" data-aos-duration="3000">
                Please take a moment to explore our website and learn more about
                the services we offer. If you have any questions or would like
                to schedule a consultation, don't hesitate to contact us. We
                look forward to working with you!
              </p>
            </div>
            <div className={classes.btn}>
              <Link to="/technology">
                <button>Technology</button>
              </Link>
              <Link to="/education">
                <button>Education</button>
              </Link>
            </div>
          </div>
        </div>
        <div className={classes.textContainer2}>
          <div className={classes.text}>
            <h2>About Us</h2>
            <p>
              At GraceHands Edutech Limited Services, we are passionate about
              empowering individuals and businesses through comprehensive and
              cutting-edge technology education.
            </p>
            <p>
              We are also passionate about
              providing exceptional tech solutions to help businesses thrive in
              the digital age. Our comprehensive range of services includes web
              development, graphic design, digital marketing, video editing, and
              content writing. We are your one-stop destination for all your
              technological needs.
            </p>
          </div>
          <div className={classes.imageContainer}>
            <img src={image} alt="about" />
          </div>
        </div>

        {/* <div className={classes.content}>
            <h2>Empowering Students & Learners Through Technology</h2>
          
            <p>
              GraceHands Edu-Tech Limited is a leading provider of innovative and
              comprehensive education technology solutions for students in
              Universities and other educational institutions. Ranging from
              Undergraduates, Masters and Doctorates. We are committed to empowering
              students and learners through technology, and we believe that every
              student should have access to high-quality educational resources and
              tools.
            </p>
            <p>
              Our services include a range of educational technology solutions, such
              as Data Analysis with SPSS, Excel, STATA, Invivo, Python, etc; Data
              Collection, Data Cleaning, Hypothesis Testing, Data Mining and Data
              Interpretation & Report Writing.
            </p>
            <p>
              Our virtual classrooms provide a collaborative learning environment
              for students, where they can interact with tutors and peers in
              real-time, participate in group discussions, and engage in
              interactive activities.
            </p>
            </div>
            <div className={classes.imgView}>
              <img src={image.p1} className={classes.view1} alt="p1" />
              <img src={image.p2} className={classes.view2} alt="p2" />
              <img src={image.p3} className={classes.view3} alt="p3" />
              <img src={image.p4} className={classes.view4} alt="p4" />
              <img src={image.p5} className={classes.view5} alt="p5" />
              <img src={image.p6} className={classes.view6} alt="p6" />
              <img src={image.p7} className={classes.view7} alt="p7" />
            </div> */}
      </div>
    </section>
  );
};

export default EduTech;
