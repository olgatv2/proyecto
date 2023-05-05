import React, { useState } from 'react'
import Modal from '../../../modals/Modal';


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
      <button onClick={handleOpen}>Regístrate</button>
      {showModal && <Modal onClose={handleClose}>
        <p>Registro</p>
      </Modal> 
      }
    </div>
  )
}
export default RegisterButton