import classes from "./Hero.module.css";
import Hero1 from "../../asset/home-hero.svg";
import Hero2 from "../../asset/about-hero.svg";
import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1,
      autoplaySpeed: 5000,
      cssEase: "linear",
    };
    return (
      <div className={classes.hero}>
        <Slider {...settings}>
          <div className={classes.hero}>
            <img src={Hero1} alt="/" className={classes.heroimg} />
            <div className={classes.overlay}></div>
            <div className={classes.content}>
              <h1>Welcome To GraceHands Research Institute </h1>
              <p>
                Institute driven with passion to affect lives in the world of
                data analytics and research
              </p>
              <Link to="/training">
                <button>Our Trainings</button>
              </Link>
            </div>
          </div>
          <div className={classes.hero}>
            <img src={Hero2} alt="/" className={classes.heroimg} />
            <div className={classes.overlay}></div>
            <div className={classes.content2}>
              <h1>Home of Research and Data Analysis</h1>
              <p>
                Our institute also acts as a thesis consultant in completion of
                a research work, training of students, plagiarism level or
                publications of a paper and many more.
              </p>
              <Link to="/training">
                <button>Our Trainings</button>
              </Link>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
