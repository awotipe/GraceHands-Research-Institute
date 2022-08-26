import React from 'react'
import Classes from "./Contact.module.css"
import ContactHero from "../../components/ContactHero/ContactHero"
import ContactForm from "../../components/ContactForm/ContactForm"
import ContactSocials from "../../components/ContactSocials/ContactSocials"

const Contact = () => {
  return (
    <div className={Classes.Contact}> 
      <ContactHero/>
      <ContactForm/>
      <ContactSocials/>
    </div>
  )
}

export default Contact