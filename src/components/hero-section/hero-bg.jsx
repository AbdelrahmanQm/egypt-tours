import React from "react";
import WorldMap from "../../assets/world-map.png";
const HeroBG = () => {
  return (
    <img
      src={WorldMap}
      alt="world map"
      className="opacity-[0.5] absolute left-0 top-0 object-cover z-0 min-w-[1350px] max-w-[100vw] heroBackground"
    />
  );
};

export default HeroBG;
