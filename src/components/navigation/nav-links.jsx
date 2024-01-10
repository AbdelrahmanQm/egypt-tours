import React from "react";
import NavLink from "./nav-link";
import { navLinksData } from "./navLinks";
const NavLinks = () => {
  return (
    <div>
      <ul className="flex justify-around ">
        {navLinksData.map((link, i) => (
          <NavLink key={i} link={link} />
        ))}
      </ul>
    </div>
  );
};

export default NavLinks;
