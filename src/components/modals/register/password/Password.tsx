import React, { useEffect, useState } from 'react'

interface PasswordProps {
  onChange: (value: string, error: boolean) => void
}

const Password: React.FC<PasswordProps> = ({ onChange }) => {
  const [password, setPassword] = useState<string>('')
  const [checked, setChecked] = useState<string>('')
  const [checkError, setCheckError] = useState<boolean>(false)

  useEffect(() => {
    onChange(password, checkError)
  }, [checked])
  
  const handlePassword = (value : string) => {
    setPassword(value)
  }

  const check = (value: string) => {
    setChecked(value)
    setCheckError(!isEqual(value) || isEmpty())
  }

  const isEqual = (value: string) => {
    return password == value
  }

  const isEmpty = () => {
    return password.length == 0
  }

  return (
    <div>
      <div className='register__field'>
        <label>Contraseña</label>
        <input
          type="password"
          role='textbox'
          aria-label='password'
          value={password}
          onChange={e => handlePassword(e.target.value)}
        />
      </div>

      <div className='register__field'>
        <label>Repite contraseña</label>
        <input
          type="password"
          role='textbox'
          aria-label='checked'
          value={checked}
          onChange={e => check(e.target.value)}
        />
        <div className='errorField'>
        {checkError && (
          <div className='error'>Las contraseñas no coinciden</div>
        )}
      </div>
      </div>
    </div>
  )
}
export default Password