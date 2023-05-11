import React, { useEffect, useState } from 'react'
import './login.css'
import UserService from '../../../services/userService'

const Login: React.FC = () => {
  const[disabled, setDisabled] = useState<boolean>(true)
  const[userName, setUserName] = useState<string>('')
  const[password, setPassword] = useState<string>('')
  
  useEffect(() =>{
    setDisabled(!(userName && password))
  },[userName, password])
  
  const validate = async () => {
    const result = await UserService.signing(userName, password)
  }

  return (
    <div className='login'>
      <form>
        <div>
          <label> Username </label>
          <input type="text" placeholder='username' value={userName} onChange={e => setUserName(e.target.value)} />
        </div>
        <div>
          <label> Password </label>
          <input type="password" placeholder='password' value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <button className='login-btn' disabled={disabled} onClick={validate}>Login</button>
      </form>
    </div>
  )
}

export default Login