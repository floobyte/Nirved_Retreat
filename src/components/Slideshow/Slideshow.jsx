import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./Slideshow.css";

const Slideshow = () => {
  const fadeImages = ["hero2.jpg", "hero3.jpg", "hero4.jpg"];
  const slideProperties = {
    duration: 3000,
    transitionDuration: 1000,
    infinite: true,
    indicators: true,
  };
  return (
    <div className="slide-container">
      <Fade {...slideProperties}>
        {fadeImages.map((fadeImage, index) => (
          <div key={index}>
            <img style={{ width: "100%", height: "100%" }} src={fadeImage} />
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default Slideshow;
