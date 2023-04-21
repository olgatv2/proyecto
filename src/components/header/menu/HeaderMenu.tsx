import React from "react"
import './menu.css'

const HeaderMenu: React.FC = () => {
  return (
    <div className='header__menu'>
        <button>
          <img className='element' src='public/menu.png' />
        </button>
      </div>
  )
}

export default HeaderMenu