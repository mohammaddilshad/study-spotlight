import React from "react";
import "./footer.css";

import { BsInstagram, BsFacebook } from "react-icons/bs";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Study Spotlight
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About Us</a>
        </li>
        <li>
          <a href="#domains">Our Focus Areas</a>
        </li>
        <li>
          <a href="#resources">Study Resources</a>
        </li>
        <li>
          <a href="#testimonial">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact Us</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com/" target="_blank"><BsFacebook /></a>
        <a href="https://instagram.com/" target="_blank"><BsInstagram /></a>
        <a href="https://twitter.com/" target="_blank"><IoLogoTwitter /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Study Spotlight .All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
