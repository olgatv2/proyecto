import React from 'react'
import './login.css'
const Login: React.FC = () => {
  return (
    <div className='containerForm'>
      <form>
        <label>
          username
          <input type="text" placeholder='username' />
        </label>
        <label>
          password
          <input type="password" placeholder='password' />
        </label>
        <button className='login-btn'>Login</button>
      </form>
    </div>
  )
}

export default Login