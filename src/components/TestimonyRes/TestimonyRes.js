import classes from "./TestimonyRes.module.css";
import man from "../../asset/image-chat.svg";
import arrow from "../../asset/arrow-chat.svg";
import video from "../../asset/video-chat.svg";
import call from "../../asset/call-chat.svg";
import shape from "../../asset/whitearrow.svg";
import React, { Component } from "react";
import Slider from "react-slick";

export default class Testimony extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      dots: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      arrows: false,
      speed: 2000,
      cssEase: "linear",

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 425,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 375,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <div className={classes.main}>
        <div className={classes.upper}>
          <h2>Testimonials</h2>
        </div>
        <Slider {...settings} className={classes.inner}>
          <div className={classes.contain}>
            <div className={classes.cardTop}>
              <div className={classes.topFlex}>
                <div className={classes.image}>
                  <div className={classes.arrow}>
                    <img src={arrow} alt="" />
                  </div>
                  <div className={classes.person}>
                    <img src={man} alt="" />
                  </div>
                </div>
                <div className={classes.text2}>
                  <h3>Faith Chidera</h3>
                  <p>Tap here for contact info</p>
                </div>
                <div className={classes.image1}>
                  <img src={video} alt="" />
                  <img src={call} alt="" />
                </div>
              </div>
            </div>
            <div className={classes.card}>
              <div className={classes.cardDate}>
                <p>Mon, Aug 2</p>
              </div>
              <div className={classes.inner}>
                <div className={classes.innerCard}>
                  <p>
                    Good morning Sir! Trust you are very well, your family and
                    business too?
                  </p>
                  <img src={shape} alt="" />
                  <div className={classes.innerTime}>
                    <p>9:56 am</p>
                  </div>
                </div>
                <div className={classes.innerCard2}>
                  <p>
                    I just completed the online research training and also
                    watched the videos. With the help of your training, I
                    developed my research proposal which I presented a seminar
                    on it last week Thursday and it was approved by my
                    Departmental lecturers.
                  </p>
                  <img src={shape} alt="" />
                  <div className={classes.innerTime2}>
                    <p>9:56 am</p>
                  </div>
                </div>
                <div className={classes.innerCard3}>
                  <p>
                    Thank you for the insights and information you have given to
                    us during the training.
                  </p>
                  <img src={shape} alt="" />
                  <div className={classes.innerTime3}>
                    <p>9:56 am</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={classes.contain}>
            <div className={classes.cardTop}>
              <div className={classes.topFlex}>
                <div className={classes.image}>
                  <div className={classes.arrow}>
                    <img src={arrow} alt="" />
                  </div>
                  <div className={classes.person}>
                    <img src={man} alt="" />
                  </div>
                </div>
                <div className={classes.text2}>
                  <h3>Ayodele Michael</h3>
                  <p>Tap here for contact info</p>
                </div>
                <div className={classes.image1}>
                  <img src={video} alt="" />
                  <img src={call} alt="" />
                </div>
              </div>
            </div>
            <div className={classes.card}>
              <div className={classes.cardDate}>
                <p>Sun, Dec 19</p>
              </div>
              <div className={classes.inner}>
                <div className={classes.innerCard4}>
                  <p>
                    Today, I went through all the research training you taught
                    last week and I really agree with you on the use of keywords
                    and variables in search of journal articles,
                  </p>
                  <img src={shape} alt="" />
                  <div className={classes.innerTime4}>
                    <p>10:33 am</p>
                  </div>
                </div>
                <div className={classes.innerCard5}>
                  <p>
                    I just applied that principle to my research topic and I
                    have been able to download lots of journals instead of
                    typing a full length of research topic.
                  </p>
                  <img src={shape} alt="" />
                  <div className={classes.innerTime5}>
                    <p>10:33 am</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={classes.contain}>
            <div className={classes.cardTop}>
              <div className={classes.topFlex}>
                <div className={classes.image}>
                  <div className={classes.arrow}>
                    <img src={arrow} alt="" />
                  </div>
                  <div className={classes.person}>
                    <img src={man} alt="" />
                  </div>
                </div>
                <div className={classes.text2}>
                  <h3>Charles Nsofor</h3>
                  <p>Tap here for contact info</p>
                </div>
                <div className={classes.image1}>
                  <img src={video} alt="" />
                  <img src={call} alt="" />
                </div>
              </div>
            </div>
            <div className={classes.card}>
              <div className={classes.cardDate}>
                <p>Wed, Mar 2</p>
              </div>
              <div className={classes.inner}>
                <div className={classes.innerCard}>
                  <p>
                    Greetings Sir! This is Charles. Trust you are doing very
                    well today sir?
                  </p>
                  <img src={shape} alt="" />
                  <div className={classes.innerTime}>
                    <p>9:56 am</p>
                  </div>
                </div>
                <div className={classes.innerCard2}>
                  <p>
                    I must confess, the research training is very educating,
                    clear and have been demystified. Honestly, many of our
                    Nigerian Universities don't teach their students stuffs like
                    this as such students are confused not knowing their left
                    from right during research.
                  </p>
                  <img src={shape} alt="" />
                  <div className={classes.innerTime2}>
                    <p>9:56 am</p>
                  </div>
                </div>
                <div className={classes.innerCard3}>
                  <p>
                    Your training is timely because i'm about starting my M.Sc
                    dissertation.
                  </p>
                  <img src={shape} alt="" />
                  <div className={classes.innerTime3}>
                    <p>9:56 am</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
