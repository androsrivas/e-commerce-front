import React from 'react'

function Logo( { name } ) {
  return (
    <Link to="/" className="logo">
      { name }
    </Link>
  )
}

export default Logo