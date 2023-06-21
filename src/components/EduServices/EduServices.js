import React, { Component } from "react";
import Slider from "react-slick";
import "./EduServices.css";

export default class EduServices extends Component{
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 3,
            autoplay: true,
            speed: 4000,
            autoplaySpeed: 5000,
            cssEase: "linear",
          

          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  initialSlide: 1
                }
              },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
                breakpoint: 400,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
            }
        ]
    };
  return (
    <div className="services">
        <div className="innerServ">
            <div className="headServ">
                <h1 >Our Services </h1>
                <p>Name the Service, We Offer It!</p>
                <div className="parag"><p>In our Tech World, we have available for you an array of technological services as well as professionals that can help you with efficient service.</p></div>
            </div>
            <Slider {...settings} className="cardServ">
                <div className="cards-s">
                    <div className="card2">
                        <div className="cardText">
                            <span className="cardText-a">
                           Technology
                            </span>
                            <div className="cardTextb">
                                <div className="bullet"></div>
                                <span className="cardText-bb">
                                GraceHands Tech World are passionate about providing exceptional tech solutions to help businesses thrive in the digital age. Our comprehensive range of services includes web development, graphic design, digital marketing, video editing, and content writing.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
        
                <div className="cards-s">
                    <div className="card4">
                        <div className="cardText">
                            <span className="cardText-a">
                            Education
                            </span>
                            <div className="cardTextb">
                                <div className="bullet"></div>
                                <span className="cardText-bb">
                                We are an institute driven by the passion to affect lives in the world of data analytics and research. We conduct training specifically in these areas, we analyze data for undergraduates and post-graduate students, and major companies.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="cards-s">
                    <div className="card2">
                        <div className="cardText">
                            <span className="cardText-a">
                           Technology
                            </span>
                            <div className="cardTextb">
                                <div className="bullet"></div>
                                <span className="cardText-bb">
                                GraceHands Tech World are passionate about providing exceptional tech solutions to help businesses thrive in the digital age. Our comprehensive range of services includes web development, graphic design, digital marketing, video editing, and content writing.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
        
                <div className="cards-s">
                    <div className="card4">
                        <div className="cardText">
                            <span className="cardText-a">
                            Education
                            </span>
                            <div className="cardTextb">
                                <div className="bullet"></div>
                                <span className="cardText-bb">
                                We are an institute driven by the passion to affect lives in the world of data analytics and research. We conduct training specifically in these areas, we analyze data for undergraduates and post-graduate students, and major companies.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    </div>
  )
}
}
