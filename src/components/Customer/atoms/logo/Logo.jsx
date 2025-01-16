import React from "react";
import { Link } from "react-router-dom";

function Logo( { name } ) {
  return (
    <Link to="/" className="logo">
      { name }
    </Link>
  )
}

export default Logo