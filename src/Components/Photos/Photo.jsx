import React from "react";
import "./Photo.css";
import gallery1 from "../../edusity_assets/gallery1.png";
import gallery2 from "../../edusity_assets/gallery2.png";
import gallery3 from "../../edusity_assets/gallery3.png";
import gallery4 from "../../edusity_assets/gallery4.png";

const Photo = () => {
  return (
    <div className="photos-container">
      <div className="photos">
        <div className="photo">
          <img src={gallery1} alt="gallery1" />
        </div>
        <div className="photo">
          <img src={gallery2} alt="gallery2" />
        </div>
        <div className="photo">
          <img src={gallery3} alt="gallery3" />
        </div>
        <div className="photo">
          <img src={gallery4} alt="gallery4" />
        </div>
      </div>
      <button className="btn photo-btn">See more here</button>
    </div>
  );
};

export default Photo;
