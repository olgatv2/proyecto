import React from 'react'
import './modalInfo.css'

interface ModalInfoProps {
  name: string
  src?: string
  description: string
  keywords: string
  contact: string
}

const ModalInfo: React.FC<ModalInfoProps> = ({name, src, description, keywords, contact}) => {
  return (
    <div className='modal--info'>
      <h1>{name}</h1>
      <img src={src} />
      <div className='content'>
        <p>{description}</p>
        <p>{keywords}</p>
        <p>Contacto : {contact}</p>
      </div>
    </div>
  )
}

export default ModalInfo