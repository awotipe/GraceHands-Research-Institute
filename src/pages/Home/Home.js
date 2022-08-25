import React from 'react'
import Hero from "../../components/Hero/Hero"
import AboutUs from "../../components/AboutUs/AboutUs"
import OurServices from "../../components/OurServices/OurServices"
import Training from "../../components/TrainingProps/TrainingProps"
import Count from "../../components/Count/Count"

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutUs/>
      <OurServices /> 
      <Training/> 
      <Count />
    </div>
  )
}

export default Home