import React, { useState } from "react";

interface modalProps {
  onClose : () => void
}

const ModalSignIn : React.FC<modalProps> = ({onClose}) => {

  return (
    <div className="modal">
      <div>I'm the Sign In dialog</div>
      <button onClick={onClose}>Close</button>
    </div>
  )
}

export default ModalSignIn