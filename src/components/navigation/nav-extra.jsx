import React from "react";
import NavSideMenuBtn from "../nav-side-menu-btn";
import NavSearch from "./nav-search";

const NavExtra = () => {
  return (
    <div className="flex gap-x-6">
      <NavSideMenuBtn />
      <NavSearch />
    </div>
  );
};

export default NavExtra;
