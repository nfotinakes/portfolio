import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://www.linkedin.com/in/nfotinakes/"
          target="_blank"
          rel="noreferrer"
          className="app__flex"
        >
          <AiFillLinkedin />
        </a>
      </div>
      <div>
        <a
          href="https://www.github.com/nfotinakes/"
          target="_blank"
          rel="noreferrer"
          className="app__flex"
        >
          <AiFillGithub />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
