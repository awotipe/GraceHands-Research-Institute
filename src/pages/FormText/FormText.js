import React from "react";
import Classes from "./FormText.module.css";
import Logo from "../../asset/Frame3.png";



const FormText = () => {

  return (
    <div className={Classes.ContactForm}>
      <div className={Classes.ContactForm2}>
      <div className={Classes.address}>
          <h2>Login To Your Account</h2>
        </div>
        <form>
          <input type="text" name="Email Address"></input>
          <input type="text"  name="Password" ></input>
    
            <button className={Classes.btn}>
              <img src={Logo} alt="/" />
              <p>Login</p>
            </button>
        </form>
      </div>
    </div>
  );
};

export default FormText;