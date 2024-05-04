import React from "react";
import "./Programs.css";
import program1 from "../../edusity_assets/program1.png";
import program2 from "../../edusity_assets/program2.png";
import program3 from "../../edusity_assets/program3.png";
import programicon1 from "../../edusity_assets/programicon1.png";
import programicon2 from "../../edusity_assets/programicon2.png";
import programicon3 from "../../edusity_assets/programicon3.png";
const Programs = () => {
  return (
    <div className=" programs">
        <div className="container">
      <div className="program">
        <img src={program1} alt="bachelor" />
        <div className="icon">
          <img src={programicon1} alt="" />
          <p>Degree Program</p>
        </div>
      </div>
      <div className="program">
        <img src={program2} alt="bachelor" />
        <div className="icon">
          <img src={programicon2} alt="" />
          <p>Masters Program</p>
        </div>
      </div>
      <div className="program">
        <img src={program3} alt="bachelor" />
        <div className="icon">
          <img src={programicon3} alt="" />
          <p>PhD Program</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Programs;
