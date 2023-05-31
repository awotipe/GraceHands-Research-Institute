import React from 'react'
import { FaWhatsappSquare } from "react-icons/fa";
import Classes from "./Whatsappchat.module.css"

const Whatsappchat = () => {
  return (
    <div className={Classes.Whatsappchat}>
        <a href="https://wa.link/iy94j6">
        <FaWhatsappSquare className={Classes.icon} />
        </a>
    </div>
  )
}

export default Whatsappchat