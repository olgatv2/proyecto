import React, { useState } from 'react'
import Modal from '../../../modals/Modal';
import './register.css'
import ModalRegister from '../../../modals/register/ModalRegister';

const RegisterButton : React.FC = () => {
  const [showModal, setShowModal] = useState(false)
  const handleOpen = () => {
    setShowModal(true)
  }

  const handleClose = () => {
    setShowModal(false)
  }

  return (
    <div>
      <button className="register__button" onClick={handleOpen}>Regístrate</button>
      {showModal && <Modal onClose={handleClose}>
        <ModalRegister />
      </Modal> 
      }
    </div>
  )
}
export default RegisterButton