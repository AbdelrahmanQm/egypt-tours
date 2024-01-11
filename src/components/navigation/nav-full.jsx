import React from "react";
import NavExtra from "./nav-extra";
import NavLinks from "./nav-links";
import NavLogo from "./nav-logo";

const NavFull = () => {
  return (
    <>
      <nav className="h-32 flex justify-between items-center  ">
        <div className="h-14">
          <NavLogo />
        </div>
        <div className="max-w-[60%] h-full sm:hidden lg:block ">
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
