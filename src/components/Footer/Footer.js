import React from "react";
import classes from "./Footer.module.css";
import Logo from "../../asset/logo-white.svg";
import Handle1 from "../../asset/FooterFB.svg";
import Handle2 from "../../asset/FooterIG.svg";
import Location from "../../asset/location-footer.svg";
import Email from "../../asset/email-footer.svg";
import Phone from "../../asset/call-footer.svg";
import { Link } from "react-router-dom";

const Footer = (props) => {
  return (
    <footer className={classes}>
      <div className={classes.footercontainer}>
        <div className={classes.flexcontainer}>
          <div className={classes.part1}>
            <Link to="/">
              <img src={Logo} alt="/" className={classes.footlogo} />
            </Link>
            <p>
              We are an institute driven by the passion to affect lives in the
              world of data analytics and research. We conduct training
              specifically in these areas. We also analyze data for
              undergraduates and post-graduate students and major companies
            </p>
            <div className={classes.address}>
              <img src={Handle1} alt="/" className={classes.social} />
              <img src={Handle2} alt="/" className={classes.social1} />
            </div>
          </div>

          <div className={classes.part}>
            <div className={classes.part2}>
              <h3>Explore</h3>
              <p>About Us</p>
              <p>Contact</p>
              <p>Terms & Condition</p>
              <p>Private Policy</p>
            </div>
            <div className={classes.part2}>
              <h3>Courses</h3>
              <p>SPSS</p>
              <p>Data Analysis</p>
              <p>Research Analysis</p>
            </div>

            <div className={classes.part2}>
              <h3>Address</h3>
              <div className={classes.location}>
                <img src={Phone} alt="/" className={classes.image} />
                <p>+234 816 818 1969</p>
              </div>
              <div className={classes.location}>
                <img src={Email} alt="/" className={classes.image} />
                <p>info@gracehandsresearchinstitute.org</p>
              </div>
              <div className={classes.location}>
                <a href="https://www.google.com/maps/place/8+Safebirth+St,+Fadeyi+102215,+Lagos/@6.5278426,3.3646269,17z/data=!3m1!4b1!4m5!3m4!1s0x103b8db24ddf5aa7:0x23d15157e56801de!8m2!3d6.5278373!4d3.3668156">
                  <img src={Location} alt="/" className={classes.image} />
                  <p>OAU New Market, Zone E, Block 4., Ile-Ife, Nigeria.</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.line2}></div>

      <div className={classes.copyright}>
        <div className={classes.copy}>
          <p>© 2022 Grace Hands Research Institute</p>
        </div>
        <div className={classes.copy2}>
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
    </footer>
  );
};

export default Footer;
