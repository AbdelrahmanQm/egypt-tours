import React from "react";
import MenuIcon from "../../assets/svgs/menu-icon";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../../store/menu/menuReducer";
import { useSelector } from "react-redux";
const NavSideMenuBtn = () => {
  const dispatch = useDispatch();
  const menuState = useSelector((state) => state.menu);
  console.log(menuState);
  const showState = () => {
    console.log(menuState);
  };
  return (
    <button
      onClick={() => {
        dispatch(toggleMenu());
      }}
      onMouseEnter={showState}
      className="sm:block lg:hidden"
    >
      <MenuIcon className="" />
    </button>
  );
};

export default NavSideMenuBtn;
