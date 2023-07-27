import React, { Component } from "react";
import Slider from "react-slick";
import "./Services.css";

export default class Services extends Component{
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 3,
            autoplay: true,
            speed: 7000,
            autoplaySpeed: 7000,
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
                <h2>Name the Service, We Offer It!</h2>
                <p>In our Tech World, we have available for you an array of technological services as well as professionals that can help you with efficient service.</p>
            </div>
            <Slider {...settings} className="cardServ">
                <div className="cards-s">
                    <div className="card1">
                        <div className="cardText">
                             <p>Web Development</p>
                            <div className="cardTextb">
                                <div className="bullet"></div>
                               <p>
                                GraceHands is a web development company that specializes in creating high-quality, custom websites for businesses of all sizes. 
                               </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cards-s">
                    <div className="card2">
                        <div className="cardText">
                            <p>Graphics Design</p>
                            <div className="cardTextb">
                                <div className="bullet"></div>
                                <p>GraceHands Graphic Design is a creative design studio that specializes in providing a wide range of graphic design services.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cards-s">
                    <div className="card3">
                        <div className="cardText">
                            <p>Video Editing</p>
                            <div className="cardTextb">
                                <div className="bullet"></div>
                                <p>GraceHands is a professional video editing service that provides high-quality video editing services to clients.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cards-s">
                    <div className="card5">
                        <div className="cardText">
                          <p>Digital Marketing</p>
                            <div className="cardTextb">
                                <div className="bullet"></div>
                                <p>GraceHands is a leading digital marketing company that can help businesses of all sizes achieve their marketing goals.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cards-s">
                    <div className="card4">
                        <div className="cardText">
                            <p>Content Writing</p>
                            <div className="cardTextb">
                                <div className="bullet"></div>
                                <p>GraceHands is a talented content writer who has built a reputation for delivering high-quality content across a range of topics and industries.</p>
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
