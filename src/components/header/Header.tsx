import React from 'react'
import HeaderMenu from './menu/HeaderMenu'
import './header.css'
import HeaderButtons from './button/HeaderButtons'

const Header: React.FC = () => {
  return (
    <div className='header'>
      <div className='header__icons'>
        <button className='logo' onClick={() => window.location.reload()}>
          <img src="public/logo.png" alt='logo'/>
        </button>
        <HeaderMenu />
        <HeaderButtons />
      </div>
      <img className="header__img" src="public/head.jpg" alt='musicians'/>
    </div>
  )
}

export default Header