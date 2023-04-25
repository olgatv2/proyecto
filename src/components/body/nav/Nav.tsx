import React, { useState } from "react";
import './nav.css'
import { MusicType } from "../../../types/music";
import MusicTypes from "../../../services/musicType";

const types: Array<MusicType> = MusicTypes.obtain()

interface navProps {
  filter: (type: string) => void
}

const Nav: React.FC<navProps> = ({ filter }) => {
  const [musicTypes, setMusicTypes] = useState(types)
  
  const selecType = (singleType: string) => {
    filter(singleType)
  }

  return (
    <div className="nav">
      {
        types.map((type : MusicType) => 
        <button key={type.name} onClick={() => selecType(type.name)}>
          <p>{type.name}</p>
          <img src={type.src} alt="icon"/>
        </button>
        )
      }
    </div>
  )
}

export default Nav