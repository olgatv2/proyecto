import React, { useState } from "react";
import './button.css'
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import Modal from "../../modals/Modal";
import Login from "../../modals/login/Login";

const HeaderButtons: React.FC = () => {
  const [showModal, setShowModal] = useState(false)

  const handleOpen = () => {
    setShowModal(true)
  }

  const handleClose = () => {
    setShowModal(false)
  }

  return (
    <div className="header__buttons">
      <button onClick={handleOpen}>Regístrate</button>
      {/* {showModal &&  <Modal onClose={handleClose}>
        <p>Registro</p>
      </Modal>} */}

      <button onClick={handleOpen}>Entra</button>
      {showModal && <Modal onClose={handleClose}>
        <Login />
      </Modal>}
    </div>
  )
}
export default HeaderButtons