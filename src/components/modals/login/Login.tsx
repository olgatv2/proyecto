import React, { useEffect, useState } from 'react'
import './login.css'
import UserService from '../../../services/userService'
import { User } from '../../../types/user'
import { LoginService } from '../../../services/login'

interface LoginProps {
  onClose: () => void
}

const Login: React.FC<LoginProps> = ({ onClose }) => {
  const [disabled, setDisabled] = useState<boolean>(true)
  const [userName, setUserName] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  useEffect(() => {
    setDisabled(!(userName && password))
  }, [userName, password])

  const validate = async () => {
    const result = await UserService.login(userName, password)
    if (result) {
      alert(`Bienvenido ${result.name}`)
      onClose()
    } else {
      alert('Datos no correctos.')
    }
  }

  return (
    <div className='login'>
      <div className='login__fields'>
        <div>
          <label> Username </label>
          <input type="text" placeholder='username' value={userName} onChange={e => setUserName(e.target.value)} />
        </div>
        <div>
          <label> Password </label>
          <input type="password" placeholder='password' value={password} onChange={e => setPassword(e.target.value)} />
        </div>
      </div>
      <button className='login-btn' disabled={disabled} onClick={validate}>Login</button>
    </div>
  )
}

export default Login