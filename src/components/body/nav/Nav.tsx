import React, { useState } from "react";
import './nav.css'
import { MusicType } from "../../../types/music";
import MusicTypeService from "../../../services/musicTypeService";

const types: Array<MusicType> = await MusicTypeService.obtain()

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
          <img src={type.src} alt="icon" className="icon"/>
        </button>
        )
      }
    </div>
  )
}

export default Nav