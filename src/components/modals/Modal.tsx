import React, { Children } from 'react'
import './modal.css'

interface ModalProps {
  onClose: () => void
  children?: any
}
const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  return (
    <div className='modal'>
      <div className='modal-content'>
        <button className="modal-btn" onClick={onClose}>X</button>
        {children}
      </div>
    </div>
    
  )
}

export default Modal