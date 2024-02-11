import React from "react";
import HeroBG from "./hero-bg";
import HeroImages from "./hero-images";
import HeroText from "./hero-text";

const HeroSection = () => {
  return (
    <div className=" ">
      <div className=" flex max-w-[1350px] p-4 m-auto justify-between items-center gap-16">
        <div>
          <HeroText />
        </div>
        <div className="">
          <HeroImages />
        </div>
      </div>
      <HeroBG />
    </div>
  );
};

export default HeroSection;
