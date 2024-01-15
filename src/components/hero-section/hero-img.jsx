import React from "react";
import heroImg from "../../assets/i-parallax-15.jpeg";
const HeroImage = () => {
  return (
    <div className="w-[350px] h-[650px] overflow-hidden bg-green rounded-full">
      <img src={heroImg} alt="heroImage" className="object-cover h-full" />
    </div>
  );
};

export default HeroImage;
