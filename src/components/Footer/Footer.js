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
                <p>gracehands123@gmail.com</p>
              </div>
              <div className={classes.location}>
                <a href="https://www.google.com/maps/place/New+Market,+Obafemi+Awolowo+University+Ife/@7.5166013,4.5105495,17z/data=!4m9!1m2!2m1!1sOAU+New+Market,+Zone+E,+Block+4.,+Ile-Ife,+Nigeria!3m5!1s0x10383124fac75a11:0x50e159c9e4d9399f!8m2!3d7.5156653!4d4.5129797!15sCjJPQVUgTmV3IE1hcmtldCwgWm9uZSBFLCBCbG9jayA0LiwgSWxlLUlmZSwgTmlnZXJpYZIBEnByaXZhdGVfdW5pdmVyc2l0eeABAA">
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
