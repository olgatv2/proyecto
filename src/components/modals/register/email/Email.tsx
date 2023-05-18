import React, { useState } from 'react'

interface EmailProps {
  onChange: (value: string, error: boolean) => void
}

const Email: React.FC<EmailProps> = ({ onChange }) => {
  const [email, setEmail] = useState<string>('')
  const [wrongEmail, setWrongEmail] = useState<string>('')

  const emailRE: RegExp = /[a-zA-Z0-9!#$%&'*\/=?^_`{|}~+-]([\.]?[a-zA-Z0-9!#$%&'*\/=?^_`{|}~+-])+@[a-zA-Z0-9]([^@&%$/()=?¿!.,:;]|\d)+[a-zA-Z0-9][\.][a-zA-Z]{2,4}([\.][a-zA-Z]{2})?/

  const handleEmail = (value: string) => {
    let error: string = ''
    if (!emailRE.test(value)) error = 'bad.email'
    setWrongEmail(error)
    setEmail(value)
    onChange(value, Boolean(error))
  }

  return (
    <div className='register__field'>
      <label>E-mail</label>
      <input
        type="text"
        role='textbox'
        aria-label='email'
        value={email}
        onChange={e => handleEmail(e.target.value)}
      />
      <div className='errorField'>
        {wrongEmail && (
          <div className='error'>{wrongEmail} </div>
        )}
      </div>
    </div>
  )
}
export default Email