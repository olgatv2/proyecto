import React, { useState } from "react";
import './button.css'
import { createPortal } from "react-dom";
import ModalRegister from "./ModalRegister";
import ModalSignIn from "./ModalSignIn";

const HeaderButtons: React.FC = () => {
  const [showRegister, setShowRegister] = useState(false)
  const [showSignIn, setShowSignIn] = useState(false)

  return (
    <div className="header__buttons">
      <button onClick={() => setShowRegister(true)}>Regístrate</button>
      {showRegister && createPortal(
        <ModalRegister onClose={() => setShowRegister(false)} />,
        document.body // tengo que cambiar el nodo del dom
      )}
      <button onClick={() => setShowSignIn(true)}>Entra</button>
      {showSignIn && createPortal(
        <ModalSignIn onClose={() => setShowSignIn(false)} />,
        document.body // tengo que cambiar el nodo del dom
      )}
    </div>
  )
}
export default HeaderButtons