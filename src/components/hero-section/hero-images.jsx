import React, { useState } from "react";
import HeroImage from "./hero-img";
import heroImgOne from "../../assets/i-parallax-15.jpeg";
import heroImgTwo from "../../assets/i-parallax-20.jpeg";
import HeroBG from "./hero-bg";
const HeroImages = () => {
  return (
    <div className="flex gap-8 z-10 relative heroImageContainer">
      <div className="translate-y-[80px] transform heroImageOne">
        <HeroImage img={heroImgOne} />
      </div>
      <div className="translate-y-[220px] transform heroImageTwo">
        <HeroImage img={heroImgTwo} />
      </div>
    </div>
  );
};

export default HeroImages;
