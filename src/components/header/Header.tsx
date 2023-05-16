import React from 'react'
import HeaderMenu from './menu/HeaderMenu'
import './header.css'
import HeaderButtons from './button/HeaderButtons'

const Header: React.FC = () => {
  return (
    <div className='header'>
      <div className='header__icons'>
        <button className='logo' onClick={() => window.location.reload()}>
          <img src="public/logo.jpg" alt='logo'/>
        </button>
        <HeaderMenu />
        <HeaderButtons />
      </div>
      <img src="public/header.jpg" alt='musicians'/>
    </div>
  )
}

export default Header