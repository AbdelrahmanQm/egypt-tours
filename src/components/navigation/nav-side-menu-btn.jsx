import React from "react";
import MenuIcon from "../../assets/svgs/menu-icon";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../../store/menu/menuReducer";

const NavSideMenuBtn = () => {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => {
        dispatch(toggleMenu());
      }}
      className="sm:block lg:hidden"
    >
      <MenuIcon className="" />
    </button>
  );
};

export default NavSideMenuBtn;
