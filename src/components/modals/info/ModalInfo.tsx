import React from 'react'
import './modalInfo.css'
import { Artist } from '../../../types/artist'

interface ModalInfoProps {
  info: Artist
}

const ModalInfo: React.FC<ModalInfoProps> = ({info}) => {
  return (
    <div className='modal--info'>
      <h1>{info.name}</h1>
      <img src={info.image} alt='imagen de perfil'/>
      <div className='content'>
        <p>{info.grouping}</p>
        <p>{info.description}</p>
        <p>Contacto : {info.email} {info.phonenumber}</p>
        <p>Redes Sociales: {info.rrss}</p>
      </div>
    </div>
  )
}

export default ModalInfo