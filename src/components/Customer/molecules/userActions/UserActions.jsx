import React from "react";
import UserIcon from "../../atoms/userIcon/UserIcon";
import { FaRegUser } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

function UserActions() {
  return (
    <div className="user-actions">
        <UserIcon icon={ FaRegUser } alt="Perfil" onClick={() => console.log("Perfil")}/>
        <UserIcon icon={ CiSearch } alt="Buscar" onClick={() => console.log("Buscar")}/>
        <UserIcon icon={ FaRegHeart } alt="Favoritos" onClick={() => console.log("Favoritos")}/>
        <UserIcon icon={ FaShoppingCart } alt="Carrito" onClick={() => console.log("Carrito")}/>
    </div>
  )
}

export default UserActions