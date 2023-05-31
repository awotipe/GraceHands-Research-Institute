import React from 'react'
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero"
import AboutUs from "../../components/AboutUs/AboutUs"
import OurServices from "../../components/OurServices/OurServices"
import Training from "../../components/TrainingProps/TrainingProps"
import Count from "../../components/Count/Count"
import Certificate from "../../components/Certificate/Certificate";
import Testimony from "../../components/Testimony/Testimony";
import Footer from "../../components/TechFooter/Footer";

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <AboutUs/>
      <OurServices /> 
      <Training/> 
      <Count />
      <Certificate/>
      <Testimony />
      <Footer/>
    </div>
  )
}

export default Home