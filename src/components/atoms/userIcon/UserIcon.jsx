import React from 'react'

function UserIcon({ icon, alt, onClick }) {
  return (
    <button onClick={ onClick } className="user-icon-btn">
        <img src={ icon } alt={ alt } />
    </button>
  )
}

export default UserIcon