import React, { useEffect, useState } from 'react'
import './register.css'
import Email from './email/Email'
import Password from './password/Password'
import UserService from '../../../services/userService'
import { User } from '../../../types/user'

interface RegisterProps {
  onClose: () => void
}

const Register: React.FC <RegisterProps>= ({onClose}) => {
  const [disabled, setDisabled] = useState<boolean | undefined>(true)
  const [userName, setUserName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [emailError, setEmailError] = useState<boolean>(true)
  const [password, setPassword] = useState<string>('')
  const [checked, setChecked] = useState<string>('')
  const [passwordError, setPasswordError] = useState<boolean>(true)

  useEffect(() => {
    const fullfilled: boolean = (userName != '' && email != '' && password != '' && checked != '')
    const errors: boolean = Boolean(emailError || passwordError)
    const isWrong: boolean = !fullfilled || errors
    setDisabled(isWrong)
  }, [userName, email, password, checked])

  const handleUserName = (value: string) => {
    setUserName(value)
  }

  //Hay que controlar que no exista un usuario con este email.
  const handleEmail = (value: string, error: boolean) => {
    setEmailError(error)
    setEmail(value)
  }

  const handlePassword = (value: string, error: boolean) => {
    setPasswordError(error)
    setPassword(value)
    setChecked(value)
  }

  //Hay que controlar que no exista ya el usuario por el email.
  
  const validate = async () => {
    const created: User = await UserService.signing(userName, email, password)
    alert(`El usuario: ${created.name} ha sido creado`)
    onClose()
  }

  return (
    <div className='register'>
      <div className='register__form'>
        <div className='register__field'>
          <label>Nombre</label>
          <input
            type="text"
            role='textbox'
            aria-label='username'
            value={userName}
            onChange={e => handleUserName(e.target.value)}
          />
        </div>

        <Email onChange={handleEmail} />

        <Password onChange={handlePassword} />

        <button
          value={'register'}
          aria-label="register"
          disabled={disabled}
          onClick={validate}
        >
          Regístrate
        </button>
      </div>
    </div>

  )
}

export default Register