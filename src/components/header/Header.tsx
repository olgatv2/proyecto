import React from 'react'
import HeaderMenu from './menu/HeaderMenu'
import './header.css'
import HeaderButton from './button/HeaderButton'

const Header: React.FC = () => {
  return (
    <div className='header'>
      <div>
      <HeaderMenu />
      <HeaderButton />
      <HeaderButton />
      </div>
      <img className='header__img' src="public/header.jpg" />
    </div>
  )
}

export default Header