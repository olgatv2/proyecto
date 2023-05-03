import React, { useState } from "react";
import './button.css'
import { createPortal } from "react-dom";
import ModalRegister from "./ModalRegister";

const HeaderButtons: React.FC = () => {
  const [showRegister, setShowRegister] = useState(false)

  return (
    <div className="header__buttons">
      <button onClick={() => setShowRegister(true)}>Regístrate</button>
      {showRegister && createPortal(
        <ModalRegister onClose={() => setShowRegister(false)} />,
        document.body
      )}
      <button>Entra</button>
    </div>
  )
}
export default HeaderButtons