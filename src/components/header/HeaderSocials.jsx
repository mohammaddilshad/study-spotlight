import React from "react";

import { BsLinkedin } from "react-icons/bs";

import { FaGithub } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a rel="noreferrer" href="https://www.linkedin.com/in/mohammaddilshad" target="_blank">
        <BsLinkedin />
      </a>
      <a rel="noreferrer" href="https://github.com/mohammaddilshad" target="_blank">
        <FaGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
