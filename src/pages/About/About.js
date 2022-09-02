import React from "react";
import classes from "./About.module.css";
import Content from "../../asset/content.svg";
import Audience from "../../asset/audience.svg";
import Video from "../../asset/video.svg";
import Video1 from "../../asset/Excel-training.mp4";
import Video2 from "../../asset/about-video.mp4";
import Video3 from "../../asset/research-training.mp4";
import AboutHero from "../../components/AboutHero/AboutHero";

const About = () => {
  return (
    <div className={classes.Container}>
      <AboutHero />
      <div className={classes.innerContainer}>
        <div className={classes.text}>
          <p>
            We are an institute driven by the passion to affect lives in the
            world of data analytics and research. We conduct training
            specifically in these areas, we analyze data for undergraduates and
            post-graduate students, and major companies. Our institute also acts
            as a thesis consultant should anybody needs our help in the
            following: completion of a research work, training of students,
            plagiarism level or publications of a paper and many more. Presently
            partnering with the OAU entrepreneurship department in the issues of
            certificate to students that graduate from our master class
            training.
          </p>
        </div>
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
      <div className={classes.videoContainer}>
        <div className={classes.title}>
          <h3>Videos</h3>
        </div>
        <div className={classes.vidImage}>
        <video controls autostart src={Video2} type="video/mp4" />
        <video controls autostart src={Video1} type="video/mp4" />
        <video controls autostart src={Video3} type="video/mp4" />
        </div>
      </div>
      </div>
    </div>
  );
};

export default About;
