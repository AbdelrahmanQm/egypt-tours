import React from "react";
import NavExtra from "./nav-extra";
import NavLinks from "./nav-links";
import NavLogo from "./nav-logo";
import { useSelector } from "react-redux";
const NavFull = () => {
  const navOpen = useSelector((state) => state.menu.menuOpen);

  return (
    <>
      <nav className="h-32 flex justify-between items-center  ">
        <div className="h-14">
          <NavLogo />
        </div>
        <div
          className={`max-w-[60%] h-full lg:block ${
            navOpen ? "sm:block" : "sm:hidden"
          } `}
        >
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
