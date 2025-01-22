import React from "react";
import Logo from "../../../atoms/logo/Logo";
import UserActions from "../../../molecules/userActions/UserActions";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import "./Header.css";


function Header() {
  return (
    <header className="header-container">
        <Logo name="Cukies Shop"/>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink className={ navigationMenuTriggerStyle() }>Inicio</NavigationMenuLink>

              <NavigationMenuTrigger>Tienda</NavigationMenuTrigger>

              <NavigationMenuLink className={ navigationMenuTriggerStyle() }>Sobre Cukies</NavigationMenuLink>

              <NavigationMenuLink className={ navigationMenuTriggerStyle() }>Contacto</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <UserActions />
    </header>
  )
}

export default Header