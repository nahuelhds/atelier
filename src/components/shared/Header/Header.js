"use client"

import "./Header.css";
import Burger from "app/components/shared/svg/Burger.svg";
import EmptyCart from "app/components/shared/svg/EmptyCart.svg";
import Logo from "app/components/shared/svg/Logo.svg";
import { MobileMenu } from "app/components/shared/MobileMenu";
import { useState } from "react";

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  console.log(openMenu);

  return (
    <header>
      <div className="burger-box" onClick={toggleMenu} >
        <Burger />
      </div>
      <EmptyCart />
      <Logo className="logo-svg" />
      <MobileMenu openMenu={openMenu} toggleMenu={toggleMenu} />
    </header>
  );
};
