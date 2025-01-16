import React from 'react'

function NavItem( { to, text }) {
  return (
    <li className="nav-item">
      <Link to={ to } className="nav-link">
        { text }
      </Link>
    </li>
  )
}

export default NavItem