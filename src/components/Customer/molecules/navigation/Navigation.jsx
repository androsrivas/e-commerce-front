import React from "react";
import NavSection from "../../atoms/navSection/NavSection";
import "./Navigation.css";

function Navigation() {
  return (
    <section className="links-section">
        <NavSection title="Enlaces" links={["Inicio", "Tienda", "Sobre Cukies", "Contacto"]}/>
        <NavSection title="Ayuda" links={["Opciones de pago", "Devolciones", "Política de privacidad"]}/>
    </section>
  )
}

export default Navigation