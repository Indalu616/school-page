import React, { useEffect, useState } from "react";
import "./Navbar.css";
import geda from "../../edusity_assets/geda.png";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      this.window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, [sticky]);
  return (
    <div>
      <nav className={sticky ? "dark-nav" : ""}>
        <div className="container ">
          <div className="logo">
            <img src={geda} alt="logo" />
          </div>
          <ul>
            <li>Home</li>
            <li>Program</li>
            <li>About Us</li>
            <li>Campus</li>
            <li>Testimonials</li>
            <li>
              <button className="btn">Contact us</button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
