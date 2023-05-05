import React, { useState } from 'react'
import Modal from '../../../modals/Modal';
import Login from '../../../modals/login/Login';


const LoginButton : React.FC = () => {
  const [showModal, setShowModal] = useState(false)
  const handleOpen = () => {
    setShowModal(true)
  }

  const handleClose = () => {
    setShowModal(false)
  }

  return (
    <div>
      <button onClick={handleOpen}>Entra</button>
      {showModal && <Modal onClose={handleClose}>
        <Login />
      </Modal> 
      }
    </div>
  )
}
export default LoginButton