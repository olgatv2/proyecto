import React, { useState } from "react";
import './nav.css'
const TYPES = ['ROCK', 'CLASSIC', 'POP', 'LATINO', 'COVERS']

const Nav: React.FC = () => {
  const [types, setTypes] = useState(TYPES)
  
  return (
    <div className="nav">
      {
      types.map((singleType: string) => 
      <button key={singleType}>
        {/* <img className="icon" src= 'public/music_icon.png' /> */}
        <p className="musicType">{singleType}</p>
      </button>
      )
      }
    </div>
  )
}

export default Nav