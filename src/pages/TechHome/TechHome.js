import React from 'react'
import Header from "../../components/TechHeader/Header";
import Hero from "../../components/TechHero/Hero";
import About from "../../components/TechAbout/About";
import Services from "../../components/TechServices/Services";
import Footer from "../../components/TechFooter/Footer";

const TechHome = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        <About/>
        <Services/>
        <Footer/>
    </div>
  )
}

export default TechHome