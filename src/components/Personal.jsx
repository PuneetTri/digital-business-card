import React from "react";

import Headshot from "../assets/headshot.png";
import Mail from "../assets/Mail.svg";
import Linkedin from "../assets/linkedin.svg";

export default function Personal() {
  return (
    <div>
      <img className="headshot" src={Headshot} />

      <div className="personal-details">
        <p className="name">Puneet Tripathi</p>
        <p className="title">Frontend Developer</p>
        <p className="website">puneetripathi.website</p>
      </div>

      <div className="social-btns">
        <a href="mailto:puneettripathi13@gmail.com">
          <button className="mail-btn">
            <img src={Mail} />
            <p>Email</p>
          </button>
        </a>

        <a href="https://www.linkedin.com/in/puneet-tripathi-5a9655198/">
          <button className="linkedin-btn">
            <img src={Linkedin} />
            <p>Linkedin</p>
          </button>
        </a>
      </div>
    </div>
  );
}
