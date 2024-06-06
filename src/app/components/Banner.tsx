import React from "react";
import "../../Styles/banner.css";
import img from "../../../public/images/girl-stretching-back-removebg-preview 1.png";
import Link from "next/link";

function Banner() {
  return (
    <div className="banner-container">
      <img
        src={img?.src}
        className="banneImage"
      />
      <div className="banner-container2">
        <div className="banner-title">
          FIT YOUNG WOMAN DOING BATTLE STRUTCH TRAINING
          <p className="banner-para">Fitness and working out are essential components of a healthy lifestyle. Regular physical activity can help you maintain a healthy weight, reduce the risk of chronic diseases, improve mental health, and enhance your overall quality of life. Whether you're a beginner or an experienced athlete, having a well-rounded fitness plan is crucial for achieving your goals.</p>
        </div>
        <Link href={'/category'}>
        <button className="banner-button">Start Exercise</button>
        </Link>
      </div> 
    </div>
  );
}

export default Banner;
