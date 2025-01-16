import React from "react";
import UserIcon from "../../atoms/userIcon/UserIcon";
import { FaRegUser } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import "./UserActions.css";

function UserActions() {
  return (
    <section className="user-actions">
        <UserIcon className="icon" icon={ FaRegUser } alt="Perfil" onClick={() => console.log("Perfil")}/>
        <UserIcon className="icon" icon={ IoSearch } alt="Buscar" onClick={() => console.log("Buscar")}/>
        <UserIcon className="icon" icon={ FaRegHeart } alt="Favoritos" onClick={() => console.log("Favoritos")}/>
        <UserIcon className="icon" icon={ FaShoppingCart } alt="Carrito" onClick={() => console.log("Carrito")}/>
    </section>
  )
}

export default UserActions