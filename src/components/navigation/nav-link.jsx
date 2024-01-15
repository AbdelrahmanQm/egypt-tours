/* eslint-disable react/prop-types */
import React, { useState } from "react";
import ChevronDown from "../../assets/svgs/chevron-down";

const NavLink = ({ link }) => {
  const [openDrop, setOpenDrop] = useState(false);
  const displayDropDown = () => {
    setOpenDrop(true);
  };
  const hideDropDown = () => {
    setOpenDrop(false);
  };

  const toggleDisplayMenu = (id) => {
    const selectedElement = document.querySelector(`#${id}`);
    selectedElement?.classList.toggle("sm:hidden");
  };

  return (
    <li
      onClick={() => {
        toggleDisplayMenu(link.name);
      }}
      className="lg:text-gray focus:bg-yellow group text-center sm:w-full lg:w-auto sm:block sm:text-white relative text-lg group justify-center lg:flex items-center font-semibold lg:hover:text-lightgreen cursor-pointer transition-all border-b-yellow lg:hover:border-b-2 border-b-0"
    >
      {link.name}
      {link.subLinks ? <ChevronDown /> : ""}
      {link.subLinks && (
        <ul
          id={link.name}
          className={`lg:absolute sm:hidden text-beige pt-4 sm:relative lg:group-hover:flex  top-[50%] lg:transform lg:left-0 lg:pt-8 flex-col
            lg:hidden  `}
        >
          {link.subLinks.map((subLink, i) => (
            <li
              className="bg-lightgreen hover:bg-darkgreen hover:text-yellow transition-all duration-500 hover:duraion-500 py-4 px-6 text-center"
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
