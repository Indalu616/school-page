import React from "react";
import "./Title.css";

const Title = ({title,subtitle}) => {
  return (
    <div className="title-section">
      <div className="title">
        <p>{title}</p>
      </div>
      <div className="sub-title">
        <h2>{subtitle}</h2>
      </div>
    </div>
  );
};

export default Title;
