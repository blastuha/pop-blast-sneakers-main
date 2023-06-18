import React, { useState } from 'react'

import TextField from '../../TextFeld/TextField'
import FormButtons from '../FormButtons/FormButtons'
import DynamicForm from '../DynamicForm/DynamicForm'

const ForgetPassForm = () => {
  const [email, setEmail] = useState('')

  const handleChange = (e) => {
    setEmail(e.target.value)
    console.log(email)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email)
  }

  return (
    <DynamicForm handleSubmit={handleSubmit}>
      <TextField
        label={'Email'}
        name={'email'}
        value={email}
        onChange={handleChange}
      />
      <FormButtons
        firstBtnText={'Восстановить пароль'}
        secondBtnText={'Я вспомнил(-а) пароль'}
        secondBtnLink={'/auth'}
      />
    </DynamicForm>
  )
}

export default ForgetPassForm
