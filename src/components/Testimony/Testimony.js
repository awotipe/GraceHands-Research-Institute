import classes from "./Testimony.module.css";
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
                  <h3>Odejide Deborah</h3>
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
                <p>Fri, Jul 2</p>
              </div>
              <div className={classes.inner}>
                <div className={classes.innerCard}>
                  <p>
                    Good morning Sir! The name I wish to write on my certificate
                    is Deborah oluwafunke
                  </p>
                  <img src={shape} alt="" />
                  <div className={classes.innerTime}>
                    <p>2:56 pm</p>
                  </div>
                </div>
                <div className={classes.innerCard2}>
                  <p>
                    Ever since I started partaking in your trainings, I have
                    known you to be a good man and your senese of intergrity and
                    impact-making is top notch. God bless you for who you are
                    sir. Keep being you and sky is just your starting pointing.
                  </p>
                  <img src={shape} alt="" />
                  <div className={classes.innerTime2}>
                    <p>2:56 pm</p>
                  </div>
                </div>
                <div className={classes.innerCard3}>
                  <p>
                    The just concluded training was top. And the marketing part
                    got me big time. Thanks again, sir
                  </p>
                  <img src={shape} alt="" />
                  <div className={classes.innerTime3}>
                    <p>2:56 pm</p>
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
                  <h3>Wasiu Akintunde</h3>
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
                    Happy Sunday and Christmas in advance. Sir your training has
                    really assited my life to the extent that I have team that I
                    am grooming. Sir, may God continue to bless you
                  </p>
                  <img src={shape} alt="" />
                  <div className={classes.innerTime4}>
                    <p>10:33 am</p>
                  </div>
                </div>
                <div className={classes.innerCard5}>
                  <p>
                    And many has been consulting for SPSS work and I have made
                    more than what I used to enroll for the program. May God
                    bless your entire generation.
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
                  <h3>Joseph Adewale</h3>
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
                <p>Fri, Jun 24</p>
              </div>
              <div className={classes.inner}>
                <div className={classes.innerCard6}>
                  <p>
                    Hello Mr David. Thanks for everything Sir. I am now a
                    graduate. During the Covid, I signed up for your Data
                    analysis and thesis writing. I wrote my undergraduate thesis
                    myself. I analyzed my data myself. I had an A.
                  </p>
                  <img src={shape} alt="" />
                  <div className={classes.innerTime6}>
                    <p>1:45 pm</p>
                  </div>
                </div>
                <div className={classes.innerCard7}>
                  <p>
                  I had A in all my project
                  </p>
                  <img src={shape} alt="" />
                  <div className={classes.innerTime7}>
                    <p>1:45 pm</p>
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
