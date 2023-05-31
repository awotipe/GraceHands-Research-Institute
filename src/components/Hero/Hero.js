import classes from "./Hero.module.css";
import Hero1 from "../../asset/home-hero.svg";
import Hero2 from "../../asset/private coaching.svg";
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
      fade: true,
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
              <h1 data-aos="fade-down"
                data-aos-duration="3000">Welcome To GraceHands Research Institute </h1>
              <p data-aos="fade-up"
                data-aos-duration="3000">
                Institute driven with passion to affect lives in the world of
                data analytics and research.
              </p>
              <Link to="/services">
                <button>Our Services</button>
              </Link>
            </div>
          </div>
          <div className={classes.hero}>
            <img src={Hero2} alt="/" className={classes.heroimg} />
            <div className={classes.overlay}></div>
            <div className={classes.content2}>
              <h1 data-aos="fade-down"
                data-aos-duration="3000">Home of Research and Data Analysis</h1>
              <p data-aos="fade-up"
                data-aos-duration="3000">
                Our institute also acts as a thesis consultant in completion of
                a research work, training of students, plagiarism level or
                publications of a paper and many more.
              </p>
              <Link to="/services">
                <button>Our Services</button>
              </Link>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
