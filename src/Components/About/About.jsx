import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorow`s Leaders Today</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          optio impedit nulla omnis molestias, id culpa neque ut mollitia,
          deserunt magnam, debitis numquam doloribus facilis molestiae delectus
          rem velit esse!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ad,
          dolorem similique dolores esse placeat ipsum at facilis fuga quisquam
          amet quod voluptatem explicabo quia. Natus recusandae nulla quod ad.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. A beatae quo
          hic ratione velit tenetur saepe delectus quasi natus officia nulla
          dolore similique commodi illo, asperiores corrupti amet consequuntur
          ducimus?
        </p>
      </div>
    </div>
  );
};

export default About;
