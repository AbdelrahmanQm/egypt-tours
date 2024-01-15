import React from "react";
import HeroSection from "../hero-section/hero-section";
import NavFull from "../navigation/nav-full";

const HomePage = () => {
  return (
    <div>
      <div className="">
        <div className="max-w-[1300px] m-auto px-4 z-10 relative">
          <NavFull />
        </div>
        <div className="z-0 relative">
          <HeroSection />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
