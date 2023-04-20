import React, { useState } from "react";
import './nav.css'
const ICONS = ['public/music_icon.png','public/music_icon.png','public/music_icon.png','public/music_icon.png','public/music_icon.png','public/music_icon.png']
const TYPES = ['ROCK', 'CLASSIC', 'POP', 'LATINO', 'COVERS']

const Nav: React.FC = () => {
  const [icons, setIcons] = useState(TYPES)
  
  return (
    <div className="nav">
      {
      icons.map(singleType => 
      <button>
        {/* <img className="icon" src={singleIcon} /> */}
        <p className="musicType">{singleType}</p>
      </button>
      )
      }
    </div>
  )
}

export default Nav