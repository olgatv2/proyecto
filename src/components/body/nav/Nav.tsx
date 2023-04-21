import React, { useState } from "react";
import './nav.css'
const TYPES = ['Rock', 'Clásica', 'Pop', 'Latina', 'Covers']

interface navProps {
  filter: (type:string) => void
}

const Nav: React.FC<navProps>= ({filter}) => {
  const [types, setTypes] = useState(TYPES)
  
  const selecType = (singleType:string) => {
    filter(singleType)
  }

  return (
    <div className="nav">
      {
      types.map((singleType: string) => 
      <button key={singleType} onClick={() => selecType(singleType)}>
        {/* <img className="icon" src= 'public/music_icon.png' /> */}
        <p className="musicType">{singleType}</p>
      </button>
      )
      }
    </div>
  )
}

export default Nav