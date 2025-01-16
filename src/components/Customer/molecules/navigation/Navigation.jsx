import React from "react";
import NavItem from "../../atoms/navItem/NavItem";

const navLinks = [
    { to: "/", text: "Inicio" },
    { to: "/tienda", text: "Tienda" },
    { to: "/sobre", text: "Sobre Cukies"},
    { to: "/contacto", text: "Contacto" }
];

function Navigation() {
  return (
    <nav>
        <ul className="nav-list">
            {navLinks.map((link, index) => (
                <NavItem key={ index } to={ link.to } text={ link.text }/>
            ))}
        </ul>
    </nav>
  )
}

export default Navigation