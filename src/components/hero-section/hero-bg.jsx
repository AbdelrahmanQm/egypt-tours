import React from "react";
import WorldMap from "../../assets/world-map.png";
const HeroBG = () => {
  return (
    <div className=" h-[100vh] w-full overflow-hidden z-0">
      <img
        src={WorldMap}
        alt="world map"
        className="opacity-[0.5] object-cover object-center z-0 min-w-[1350px]"
      />
    </div>
  );
};

export default HeroBG;
