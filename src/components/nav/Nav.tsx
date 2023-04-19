import React, { useState } from "react";
import './nav.css'
const ICONS = ['public/music_icon.png','public/music_icon.png','public/music_icon.png','public/music_icon.png','public/music_icon.png','public/music_icon.png']

const Nav: React.FC = () => {
  const [icons, setIcons] = useState(ICONS)
  return (
    <div className="nav">
      {
      icons.map(singleIcon => <button><img className="icon" src={singleIcon} /></button>)
      }
    </div>
  )
}

export default Nav