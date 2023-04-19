import React from 'react'
import './header.css'

const Header: React.FC = () => {
  return (
    <div className='header'>
      <div className='header__menu'>
        <button className='menu__icon'>
          <img src='public/menu.png' />
        </button>
        <button className='menu__icon'>Entrar</button>
        <button className='menu__icon'>Regístrate</button>
      </div>
      <div>
        <img className='header__img' src="public/header.jpg"  />
      </div>
    </div>
  )
}

export default Header