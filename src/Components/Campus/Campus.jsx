import React from "react";
import "./Campus.css";
import about from "../../edusity_assets/about.png";

const Campus = () => {
  return (
    <div className="campus">
      <div className="campus-container">
        <div className="campus-left">
          <img src={about} alt="about-campus" />
        </div>
        <div className="campus-right">
          <h1>ABOUT UNIVERSITY</h1>
          <h2>Nurturing Tomorrow's Leaders Today</h2>
          <p>
            Embark on a transformative educational journey with our university's
            comprehensive education programs. Our cutting-edge curriculum is
            designed to empower students with the knowledge, skills, and
            experiences needed to excel in the dynamic field of education.
          </p>
          <br />
          <p>
            With a focus on innovation, hands-on learning, and personalized
            mentorship, our programs prepare aspiring educators to make a
            meaningful impact in classrooms, schools, and communities.
          </p>
          <br />
          <p>
            Whether you aspire to become a teacher, administrator, counselor, or
            educational leader, our diverse range of programs offers the perfect
            pathway to achieve your goals and unlock your full potential in
            shaping the future of education.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Campus;
