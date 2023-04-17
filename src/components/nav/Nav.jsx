import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { RiMessage3Line } from "react-icons/ri";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("about")}
        className={activeNav === "about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#domains"
        onClick={() => setActiveNav("domains")}
        className={activeNav === "domains" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        href="#resources"
        onClick={() => setActiveNav("resources")}
        className={activeNav === "resources" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("contact")}
        className={activeNav === "contact" ? "active" : ""}
      >
        <RiMessage3Line />
      </a>
    </nav>
  );
};

export default Nav;
