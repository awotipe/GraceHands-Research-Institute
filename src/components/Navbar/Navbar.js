import React, { useState } from "react";
import classes from "./Navbar.module.css";
import Logo from "../../asset/GraceHandLogo.svg";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleNavToggle = () => {
    setNavOpen(!navOpen);
  };

  const handleNavLinkClick = () => {
    setNavOpen(false);
  };

  return (
    <div className={classes.navbar}>
      <div className={classes.logo}>
        <Link to="/">
          <img src={Logo} alt="/" />
        </Link>
      </div>
      <ul className={classes.navMenu}>
        <li>
          <Link to="/" className={classes.navlink} onClick={handleNavLinkClick}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/aboutedu" className={classes.navlink} onClick={handleNavLinkClick}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="/trainings" className={classes.navlink} onClick={handleNavLinkClick}>
            Trainings
          </Link>
        </li>
        <li>
          <Link to="/technology" className={classes.navlink} onClick={handleNavLinkClick}>
            Technology
          </Link>
        </li>
        <li>
          <Link to="/contact" className={classes.navlink} onClick={handleNavLinkClick}>
            Contact
          </Link>
        </li>
      </ul>
      <div className={classes.navIcons}>
        <FaFacebook className={classes.icon} />
        <FaInstagram className={classes.icon} />
        <FaTwitter className={classes.icon} />
      </div>
      <div className={classes.hamburger} onClick={handleNavToggle}>
        {!navOpen ? (
          <HiOutlineMenuAlt4 className={classes.Icons} />
        ) : (
          <AiOutlineClose className={classes.Icons} />
        )}
      </div>
      <div className={navOpen ? classes.active : classes.mobileMenu}>
        <ul className={classes.mobileNav}>
          <li>
            <Link to="/" className={classes.navlink} onClick={handleNavLinkClick}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/aboutedu" className={classes.navlink} onClick={handleNavLinkClick}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/trainings" className={classes.navlink} onClick={handleNavLinkClick}>
              Trainings
            </Link>
          </li>
          <li>
            <Link to="/technology" className={classes.navlink} onClick={handleNavLinkClick}>
              Technology
            </Link>
          </li>
          <li>
            <Link to="/contact" className={classes.navlink} onClick={handleNavLinkClick}>
              Contact
            </Link>
          </li>
        </ul>
        <div className={classes.mobileMenuBottom}>
          <div className={classes.menuIcons}>
            <a href="https://wa.link/iy94j6">
              <button>Click to chat on WhatsApp</button>
            </a>.




















































































            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;