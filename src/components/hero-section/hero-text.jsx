import React from "react";

const HeroText = () => {
  return (
    <div className="z-10 relative">
      <p className="mb-4 uppercase text-gray">Travel to Egypt</p>
      <h1 className="text-[5rem] leading-[1.1] tracking-tight font-extrabold text-nowrap whitespace-nowrap">
        <span className=" relative border-yellow ">
          <span className="before:content-[''] before:h-8 before:left-0 before:absolute before:bottom-4 before:w-full before:border-b-8 before:border-yellow"></span>
          <span>Adventure</span>
        </span>{" "}
        &
        <br />
        Experience <br />
        The Travel !
      </h1>
    </div>
  );
};

export default HeroText;
