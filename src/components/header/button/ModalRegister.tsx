import React from "react";

interface modalProps {
  onClose: () => void
}

const ModalRegister: React.FC<modalProps> = ({ onClose }) => {
  return (
    <div className="modal">
      <div>I'm the register Modal</div>
      <button onClick={onClose}>Close</button>
    </div>
  )
}

export default ModalRegister

