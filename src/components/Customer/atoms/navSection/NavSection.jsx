import React from "react";
import NavItem from "../navItem/NavItem";
import "./NavSection.css";

function NavSection({ title, links }) {
  return (
    <section className="nav-section">
        <h4>{ title }</h4>
        <ul>
            {links.map((link, index) => (
                <NavItem className="nav-item" key={ index } text={ link }/>
            ))}
        </ul>
    </section>
  )
}

export default NavSection