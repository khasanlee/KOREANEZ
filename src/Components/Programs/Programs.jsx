import React from "react";
import "./Programs.css";
import program_1 from "../../assets/pronuncation.png";
import program_2 from "../../assets/coming-soon.png";
import program_3 from "../../assets/test-skills.png";
import program_icon_1 from "../../assets/program-icon-1.png";
import program_icon_2 from "../../assets/program-icon-2.png";
import program_icon_3 from "../../assets/program-icon-3.png";

const Programs = () => {
  const navigateToTestPage = () => {
    window.location.href ="/test.html";
  };

  return (
    <div className="programs">
      <div className="program" onClick={navigateToTestPage}>
        <img src={program_1} alt="" />
        <div className="caption">
          <img src={program_icon_1} alt="" />
          <p>Check Your Pronuncation</p>
        </div>
      </div>
      <div className="program">
        <img src={program_2} alt="" />
        <div className="caption">
          <img src={program_icon_2} alt="" />
          <p>New Future</p>
        </div>
      </div>
      <div className="program">
        <img src={program_3} alt="" />
        <div className="caption">
          <img src={program_icon_3} alt="" />
          <p>Test Your Skills</p>
        </div>
      </div>
    </div>
  );
};

export default Programs;
