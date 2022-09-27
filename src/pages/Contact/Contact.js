import React from 'react'
import Classes from "./Contact.module.css"
import ContactHero from "../../components/ContactHero/ContactHero"
import ContactForm from "../../components/ContactForm/ContactForm"
import ContactSocials from "../../components/ContactSocials/ContactSocials"
import Certificate from "../../components/Certificate/Certificate";
import Testimony from "../../components/Testimony/Testimony";

const Contact = () => {
  return (
    <div className={Classes.Contact}> 
      <ContactHero/>
      <ContactForm/>
      <ContactSocials/>
      <Certificate/>
      <Testimony />
    </div>
  )
}

export default Contact