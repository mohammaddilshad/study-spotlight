import React from "react";
import "./header.css";
import CTA from "./CTA";
import Me from "../../assets/cartoongirl.jpg";
import HeaderSocial from "./HeaderSocials";

const Header = () => {
  return (
    <header className="container header__container">
      <div>
        <div><h1>Hi! Welcome to Study Spotlight.</h1>
        <h5>One stop solution to all subject notes. </h5>
        <h5 className="text-light">Say goodbye to low grades!</h5></div>
        
        <CTA />
        <HeaderSocial />

        <div>
          <img src={Me} className="me" alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
