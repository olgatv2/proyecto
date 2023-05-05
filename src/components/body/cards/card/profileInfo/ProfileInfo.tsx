import React, { useState } from 'react'
import Modal from '../../../../modals/Modal'
import ModalInfo from '../../../../modals/info/ModalInfo'


const ProfileInfo : React.FC = () => {
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
        <ModalInfo />
      </Modal> 
      }
    </div>
  )
}
export default ProfileInfo