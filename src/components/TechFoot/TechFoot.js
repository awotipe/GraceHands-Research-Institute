import React from 'react'
import "./TechFoot.css";
import Footlogo from "../../asset/footlogo.png";
import Facebook from "../../asset/facebook.png";
import Instagram from "../../asset/instagram.png";
import Email from "../../asset/email-footer.svg";
import Send from "../../asset/location-footer.svg";
import Call from "../../asset/call-footer.svg";


const TechFoot = () => {
  return (
    <div className="footer">
        <div className="foot">
            <div className="left-foot">
                <div className="footlogo">
                    <img src={Footlogo} alt="" />
                </div>
                <div className="foottext">We are an Edu-Tech company driven by the passion to affect lives in the world of Education Technology. We have the best skilled professionals for all your works.</div>
                <div className="footmedia">
                    <img src={Facebook} alt="" />
                    <img src={Instagram} alt="" />
                </div>
            </div>
            <div className="right-foot">
                <ul className="footlist-a">
                    <li><span className="ftlist-h">Explore</span></li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Terms & Condition</li>
                    <li>Privacy policy</li>
                </ul>
                <ul className="footlist-b">
                    <li><span className="ftlist-h">Services</span></li>
                    <li>Web</li>
                    <li>Graphics</li>
                    <li>Content Writing</li>
                    <li>Marketing</li>
                </ul>
                <ul className="footlist-c">
                    <li><span className="ftlist-h">Courses</span></li>
                    <li>SSPS</li>
                    <li>Data Analysis</li>
                    <li>Research Analysis</li>
                </ul>
                <div className="footlist-d">
                    <li><span className="ftlist-dh">Address</span></li>
                    <div className="send">
                        <img src={Call} alt=""/>
                        <p> +234 816 818 1969</p>
                    </div>
                    <div className="send">
                    <img src={Email} alt=""/>
                    <p>gracehands123@gmail.com</p>
                    </div>
                    <div className="send">
                        <img src={Send} alt=""/>
                        <p> OAU, new market, Zone E, block 4.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="line2"></div>
            <div className="copyright">
        <div className="copy">
          <p>© 2023 GraceHands Edu-Tech Limited Services</p>
        </div>
        <div className="copy2">
          <div>
            <p>Home</p>
          </div>
          <div>
            <p>Courses</p>
          </div>
          <div>
            <p>Contact</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TechFoot