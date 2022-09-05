import "./AboutContentStyles.css";

import React from "react";
import { Link } from "react-router-dom";
import React1 from "../assets/image5.jpg";
import React2 from "../assets/image5.jpg";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who am I?</h1>
        <p>
          Iam a full-stack web developer . I create responsive and secure
          websites.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>

      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={React1} className="img" alt="work1"></img>
          </div>
          <div className="img-stack bottom">
            <img src={React2} className="img" alt="work2"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
