import React from "react";
import classes from "./AboutUs.module.css";
import About from "../../asset/about-video.svg";
import Audience from "../../asset/audience.svg";
import Video from "../../asset/video.svg";
import Content from "../../asset/content.svg";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className={classes.Container}>
      <div className={classes.innerContainer}>
        <div className={classes.image1}>
          <img src={About} alt="/" />
        </div>
        <div className={classes.text}>
          <h2>About Us</h2>
          <p>
            We are an institute driven by the passion to affect lives in the
            world of data analytics and research. We conduct training
            specifically in these areas, we analyze data for undergraduates and
            post-graduate students, and major companies. Our institute also acts
            as a thesis consultant should anybody needs our help in the
            following; completion of a research work, training of students,
            plagiarism level or publications of a paper, and many more,
            Presently partnering with the OAU entrepreneurship department in the
            issues of certificate to students that graduate from our master
            class training
          </p>
          <div className={classes.part2}>
            <div className={classes.location}>
              <img src={Audience} alt="/" className={classes.image} />
              <p>Powerful Audience</p>
            </div>
            <div className={classes.location}>
              <img src={Video} alt="/" className={classes.image} />
              <p>High Quality Video Details</p>
            </div>
            <div className={classes.location}>
              <img src={Content} alt="/" className={classes.image} />
              <p>Premium Content Worldwide</p>
            </div>
          </div>
          <div className={classes.btn}>
          <Link to="/about">
            <button>Learn More</button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
