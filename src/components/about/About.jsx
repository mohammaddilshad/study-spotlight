import React from "react";
import "./about.css";
import Me from "../../assets/about.avif";

import { FaAward } from "react-icons/fa";
import { GiCoffeeCup } from "react-icons/gi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To know</h5>
      <h2>About Us</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>25+</h5>
              <small>Awards & Rcognition</small>
            </article>

            <article className="about__card">
              <GiCoffeeCup className="about__icon" />
              <h5>1000+</h5>
              <small>Students' Trust</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>10+</h5>
              <small>Subject Resources</small>
            </article>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt architecto aspernatur voluptate repudiandae officia autem eveniet! Doloribus illum modi placeat sapiente vel, dicta quis obcaecati veritatis voluptatem! Quas, repudiandae alias.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
