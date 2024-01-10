import React from "react";

const NavLink = ({ link }) => {
  return (
    <li className="text-gray hover:text-lightgreen cursor-pointer transition-all">
      {link.name}
    </li>
  );
};

export default NavLink;
