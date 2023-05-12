import React, { useState } from 'react'
import Modal from '../../../modals/Modal';
import './register.css'
import Register from '../../../modals/register/Register';

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
        <Register onClose= {handleClose}/>
      </Modal> 
      }
    </div>
  )
}
export default RegisterButton