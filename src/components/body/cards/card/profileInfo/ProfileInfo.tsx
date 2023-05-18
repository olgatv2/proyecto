import React, { useState } from 'react'
import Modal from '../../../../modals/Modal'
import ModalInfo from '../../../../modals/info/ModalInfo'
import { Artist } from '../../../../../types/artist'

interface ProfileInfoProps {
  profileInfo : Artist
}

const ProfileInfo: React.FC<ProfileInfoProps> = ({ profileInfo }) => {
  const [showModal, setShowModal] = useState(false)
  const handleOpen = () => {
    setShowModal(true)
  }

  const handleClose = () => {
    setShowModal(false)
  }

  return (
    <div>
      <button onClick={handleOpen}>Más info</button>
      {showModal && <Modal onClose={handleClose}>
        <ModalInfo info = {profileInfo} />
      </Modal>
      }
    </div>
  )
}
export default ProfileInfo