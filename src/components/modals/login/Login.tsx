import React, { useEffect, useState } from 'react'
import './login.css'
import UserService from '../../../services/userService'
interface LoginProps {
  onClose : () => void
}

const Login: React.FC<LoginProps> = ({onClose}) => {
  const[disabled, setDisabled] = useState<boolean>(true)
  const[userName, setUserName] = useState<string>('')
  const[password, setPassword] = useState<string>('')
  
  useEffect(() =>{
    setDisabled(!(userName && password))
  },[userName, password])
  
  const validate = async () => {
    const result : boolean= await UserService.login(userName, password)
    console.log(result)
    // if(result) onClose
  }

  return (
    <div className='login'>
        <div>
          <label> Username </label>
          <input type="text" placeholder='username' value={userName} onChange={e => setUserName(e.target.value)} />
        </div>
        <div>
          <label> Password </label>
          <input type="password" placeholder='password' value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <button className='login-btn' disabled={disabled} onClick={validate}>Login</button>
    </div>
  )
}

export default Login