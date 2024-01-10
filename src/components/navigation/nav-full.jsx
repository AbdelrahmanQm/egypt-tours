import React from "react";
import NavExtra from "./nav-extra";
import NavLinks from "./nav-links";
import NavLogo from "./nav-logo";

const NavFull = () => {
  return (
    <>
      <nav className="h-20  flex justify-between items-center">
        <div className="h-full">
          <NavLogo />
        </div>
        <div className="w-full">
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
