import React, { useRef } from "react";
import "./Testimonial.css";
import user1 from "../../edusity_assets/user1.png";
import user2 from "../../edusity_assets/user2.png";
import user3 from "../../edusity_assets/user3.png";
import user4 from "../../edusity_assets/user4.png";
import backicon from "../../edusity_assets/backicon.png";
import nexticon from "../../edusity_assets/nexticon.png";
const Testimonial = () => {
  const slider = useRef();
  let tx=0;
  function slideForward() {
if(tx >-50){
  tx-=25;
}
slider.current.style.transform=`translateX(${tx}%)`;
  }
  function slideBackward() {
    if(tx <0){
      tx+=25;
      
    }
    slider.current.style.transform=`translateX(${tx}%)`;
  }

  return (
    <div className="testimony">
      <img
          onClick={slideForward}
          className="next-icon"
          src={nexticon}
          alt=""
        />
        <img
          onClick={slideBackward}
          className="back-icon"
          src={backicon}
          alt=""
        />
      <div className="testimonial-container">
        
        <ul ref={slider}>
          <li>
            <div className="user">
              <img src={user1} alt="user1" />
              <div className="user-info">
                <h3>Emily Williams</h3>
                <p>Educity,USA</p>
              </div>
            </div>
            <p>
              Choosing to pursue my degree at Edusity was one of the best
              decisions I've ever made. The supportive community,
              state-of-the-art facilities, and commitment to academic excellence
              have truly exceeded my expectations.
            </p>
          </li>
          <li>
            <div className="user">
              <img src={user2} alt="user2" />

              <div className="user-info">
                <h3>Emily Williams</h3>
                <p>Educity,USA</p>
              </div>
            </div>
            <p>
              Choosing to pursue my degree at Edusity was one of the best
              decisions I've ever made. The supportive community,
              state-of-the-art facilities, and commitment to academic excellence
              have truly exceeded my expectations.
            </p>
          </li>
          <li>
            <div className="user">
              <img src={user3} alt="user3" />

              <div className="user-info">
                <h3>Emily Williams</h3>
                <p>Educity,USA</p>
              </div>
            </div>
            <p>
              Choosing to pursue my degree at Edusity was one of the best
              decisions I've ever made. The supportive community,
              state-of-the-art facilities, and commitment to academic excellence
              have truly exceeded my expectations.
            </p>
          </li>
          <li>
            <div className="user">
              <img src={user4} alt="user4" />
              <div className="user-info">
                <h3>Emily Williams</h3>
                <p>Educity,USA</p>
              </div>
            </div>
            <p>
              Choosing to pursue my degree at Edusity was one of the best
              decisions I've ever made. The supportive community,
              state-of-the-art facilities, and commitment to academic excellence
              have truly exceeded my expectations.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonial;
