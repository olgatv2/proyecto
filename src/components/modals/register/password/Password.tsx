import React, { useEffect, useState } from 'react'

interface PasswordProps {
  onChange: (value: string, error: boolean) => void
}

const Password: React.FC<PasswordProps> = ({ onChange }) => {
  const [password, setPassword] = useState<string>('')
  const [checked, setChecked] = useState<string>('')
  const [checkError, setCheckError] = useState<boolean>(false)

  useEffect(() => {
    check(password, checked)
  }, [password, checked])

  useEffect(() => {
    onChange(password, checkError)
  }, [checkError])

  const check = (passwordvalue : string, checkedvalue: string) => {
    if(!isEmpty(passwordvalue)) {
      setCheckError(true)
      if(areEqual(passwordvalue, checkedvalue)) {
        setCheckError(false)
      }
    }
  }

  const isEmpty = (passwordvalue: string) => {
    let empty = true
    if(passwordvalue != '') empty = false
    return empty
  }

  const areEqual = (passwordvalue: string, checkedvalue:string) => {
    let equal = false
    if(passwordvalue == checkedvalue) equal = true
    return equal
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
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <div className='register__field'>
        <label>Repite contraseña</label>
        <input
          type="password"
          role='textbox'
          aria-label='checked'
          value={checked}
          onChange={e => setChecked(e.target.value)}
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