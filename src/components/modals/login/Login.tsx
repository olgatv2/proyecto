import React from 'react'
import './login.css'
const Login: React.FC = () => {
  return (
    <div className='login'>
      <form>
        <div>
          <label> Username </label>
          <input type="text" placeholder='username' />
        </div>
        <div>
          <label> Password </label>
          <input type="password" placeholder='password' />
        </div>
        <button className='login-btn'>Login</button>
      </form>
    </div>
  )
}

export default Login