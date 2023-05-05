import React, { Children } from 'react'
import ReactDOM from 'react-dom'
import './modal.css'

interface ModalProps {
  onClose: () => void
  children: any
}
const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  return (
    <div className='modal'>
      <div className='modal-content'>
        <div className='modal-header'>
          <h1>MODAL</h1>
          <button onClick={onClose}>X</button>
        </div>
        <div className='modal-body'>
          {children}
        </div>
      </div>
    </div>


  )
}

const ModalPortal: React.FC<ModalProps> = ({ onClose, children }) => {
  return ReactDOM.createPortal(
    <Modal onClose={onClose}>{children}</Modal>,
    document.getElementById("modal-root") as HTMLElement
  )
}

export default ModalPortal