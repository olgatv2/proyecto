import React from 'react'
import HeaderMenu from './menu/HeaderMenu'
import './header.css'
import HeaderButtons from './button/HeaderButtons'

const Header: React.FC = () => {
  return (
    <div className='header'>
      <div className='header__icons'>
        <img className='logo' src="public/logo.jpg"/>
        <HeaderMenu />
        <HeaderButtons />
      </div>
      <img src="public/header.jpg" />
    </div>
  )
}

export default Header