import React from 'react'
import Classes from "./Contact.module.css"
import Navbar from "../../components/TechHeader/Header";
import ContactHero from "../../components/ContactHero/ContactHero"
import ContactForm from "../../components/ContactForm/ContactForm"
import ContactSocials from "../../components/ContactSocials/ContactSocials"
import Certificate from "../../components/Certificate/Certificate";
import Testimony from "../../components/Testimony/Testimony";
// import Footer from "../../components/Footer/Footer";

const Contact = () => {
  return (
    <div className={Classes.Contact}> 
      <Navbar/>
      <ContactHero/>
      <ContactForm/>
      <ContactSocials/>
      <Certificate/>
      <Testimony />
      {/* <Footer/> */}
    </div>
  )
}

export default Contact