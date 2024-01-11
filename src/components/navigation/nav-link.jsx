/* eslint-disable react/prop-types */
import React, { useState } from "react";

const NavLink = ({ link }) => {
  const [openDrop, setOpenDrop] = useState(false);
  const displayDropDown = () => {
    setOpenDrop(true);
  };
  const hideDropDown = () => {
    setOpenDrop(false);
  };
  return (
    <li
      onMouseEnter={displayDropDown}
      onMouseLeave={hideDropDown}
      className="text-gray relative text-lg group justify-center flex items-center font-semibold hover:text-lightgreen cursor-pointer transition-all border-b-yellow hover:border-b-2 border-b-0"
    >
      {link.name}
      {link.subLinks && (
        <ul
          onMouseEnter={displayDropDown}
          onMouseLeave={hideDropDown}
          className={`absolute  text-white top-[50%] transform left-0 pt-8  flex-col ${
            openDrop ? "flex" : "hidden"
          } `}
        >
          {link.subLinks.map((subLink, i) => (
            <li
              className="bg-green hover:bg-darkgreen hover:text-yellow transition-all duration-500 hover:duraion-500 py-4 px-6 text-center"
              key={i}
            >
              {subLink.subLinkName}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default NavLink;
