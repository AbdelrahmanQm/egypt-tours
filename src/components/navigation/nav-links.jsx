import React from "react";
import NavLink from "./nav-link";
import { navLinksData } from "./navLinks";
const NavLinks = () => {
  return (
    <ul className="flex justify-around items-center gap-24 h-full ">
      {navLinksData.map((link, i) => {
        return <NavLink key={i} link={link} />;
      })}
    </ul>
  );
};

export default NavLinks;
