import React from 'react'
import Hero from "../../components/Hero/Hero"
import AboutUs from "../../components/AboutUs/AboutUs"
import OurServices from "../../components/OurServices/OurServices"
import Training from "../../components/TrainingProps/TrainingProps"
import Count from "../../components/Count/Count"
import Certificate from "../../components/Certificate/Certificate";
import Testimony from "../../components/Testimony/Testimony";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutUs/>
      <OurServices /> 
      <Training/> 
      <Count />
      <Certificate/>
      <Testimony />
    </div>
  )
}

export default Home