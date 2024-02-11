import React from "react";
import heroImg from "../../assets/i-parallax-15.jpeg";
const HeroImage = ({ img }) => {
  return (
    <div className="max-w-[365px] h-[675px] overflow-hidden bg-green rounded-full">
      <img src={img} alt="heroImage" className="object-cover h-full" />
    </div>
  );
};

export default HeroImage;
