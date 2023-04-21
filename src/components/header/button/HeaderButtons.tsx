import React, { useState } from "react";
import './button.css'

const buttons: Array<string> = ['Regístrate', 'Entra']

const HeaderButtons: React.FC = () => {
  const [names, setNames] = useState(buttons)

  return (
    <div className="header__buttons">
      {
        names.map((name: string) => 
          <button >{name}</button>
        )
      }
    </div>
  )
}
export default HeaderButtons