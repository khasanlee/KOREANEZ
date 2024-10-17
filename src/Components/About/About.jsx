import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
      </div>
      <div className="about-right">
        <h3>ABOUT KOREAN EZ</h3>
        <h2>Make Your Korean Skills Better!</h2>
        <p>
          사이트 대한 정보
        </p>
        <p>
          사이트 대한 정보
        </p>
        <p>
          사이트 대한 정보
        </p>
      </div>
    </div>
  );
};

export default About;
