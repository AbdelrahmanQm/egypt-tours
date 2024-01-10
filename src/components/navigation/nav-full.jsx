import React from "react";
import NavExtra from "./nav-extra";
import NavLinks from "./nav-links";
import NavLogo from "./nav-logo";

const NavFull = () => {
  return (
    <>
      <nav>
        <div>
          <NavLogo />
        </div>
        <div>
          <NavLinks />
        </div>
        <div>
          <NavExtra />
        </div>
      </nav>
    </>
  );
};

export default NavFull;
