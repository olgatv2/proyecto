import React from 'react'
import './modalRegister.css'

const ModalRegister: React.FC = () => {

  return (
    <div className='register'>
      <div className='register__form'>
        <div className='register__field'>
          <label>Nombre</label>
          <input type="text" />
        </div>
        <div className='register__field'>
          <label>E-mail</label>
          <input type="text" />
        </div>
        <div className='register__field'>
          <label>Contraseña</label>
          <input type="password" />
        </div>
        <div className='register__field'>
          <label>Repite contraseña</label>
          <input type="password" />
        </div>
        <button>Regístrate</button>
      </div>
    </div>
  )
}

export default ModalRegister