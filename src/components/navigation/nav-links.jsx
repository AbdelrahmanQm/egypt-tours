import React from "react";
import NavLink from "./nav-link";
import { navLinksData } from "./navLinks";
const NavLinks = () => {
  return (
    <ul className="flex justify-around items-center lg:gap-24 sm:gap-8 lg:py-0 sm:py-8 sm:left-0 lg:relative sm:absolute lg:h-full sm:h-auto sm:bg-green lg:bg-white sm:flex-col lg:flex-row w-full lg:top-0 sm:top-32 ">
      {navLinksData.map((link, i) => {
        return <NavLink key={i} link={link} />;
      })}
    </ul>
  );
};

export default NavLinks;
