import React, { useState } from 'react'
import Modal from '../../../../modals/Modal'
import ModalInfo from '../../../../modals/info/ModalInfo'

interface ProfileInfoProps {
  name: string
  src?: string
  description: string
  keywords: string
  contact: string
}

const ProfileInfo: React.FC<ProfileInfoProps> = ({ name, src, description, keywords, contact }) => {
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
        <ModalInfo name={name} src={src} description={description} keywords={keywords} contact={contact} />
      </Modal>
      }
    </div>
  )
}
export default ProfileInfo