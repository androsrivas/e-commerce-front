import React from "react";
import Logo from "../../atoms/logo/Logo";
import Navigation from "../../molecules/navigation/Navigation";
import UserActions from "../../molecules/userActions/UserActions";

function Header() {
  return (
    <header>
        <Logo name="Cukies Shop"/>
        <Navigation />
        <UserActions />
    </header>
  )
}

export default Header