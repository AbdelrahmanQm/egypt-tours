import React from "react";
import { navLinksData } from "./navLinks";
const NavLinks = () => {
  return (
    <div>
      <ul>
        {navLinksData.map((link, i) => (
          <li key={i}>{link.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default NavLinks;
