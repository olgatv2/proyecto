import React from 'react'
import './modalInfo.css'
import { Artist } from '../../../types/artist'

interface ModalInfoProps {
  info: Artist
}

const ModalInfo: React.FC<ModalInfoProps> = ({ info }) => {
  return (
    <div className='modal--info'>
      <h1 className='title-font'>{info.name}</h1>
      <img src={info.image} alt='imagen de perfil' />
      <div className='content'>
        <div className='content__grouping'>{info.grouping}</div>
        <div>{info.description}</div>
        <div className='contact'>
          <div>Contacto: </div>
          <div className='contact__elements'>
            <div>{info.email}</div>
            <div>{info.phonenumber}</div>
          </div>
        </div>
        <div className='rrss'>
          <div>
            Redes Sociales:
          </div>
          <div>
            {info.rrss}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalInfo