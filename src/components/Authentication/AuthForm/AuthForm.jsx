import React, { useState, useEffect } from 'react'

import TextField from '../../TextFeld/TextField'
import LoginError from '../LoginError/LoginError'
import FormButtons from '../FormButtons/FormButtons'
import DynamicForm from '../DynamicForm/DynamicForm'

import useValidate from '../../../hooks/useValidate'

const AuthForm = () => {
  const [data, setData] = useState({ email: '', password: '' })
  const [emailFocused, setEmailFocused] = useState(false)
  const [passFocused, setPassFocused] = useState(false)
  const { errors, validate } = useValidate(data)

  const handleChange = ({ target }) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    validate()
    if (Object.keys(errors).length !== 0) return
    console.log(data.email, data.password)
  }

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'email':
        setEmailFocused(true)
        break
      case 'password':
        setPassFocused(true)
        break
      default:
        break
    }
  }

  useEffect(() => {
    validate()
  }, [data, validate])

  return (
    <DynamicForm handleSubmit={handleSubmit}>
      {emailFocused && passFocused && <LoginError errors={errors} />}
      <TextField
        label={'Email'}
        name={'email'}
        value={data.email}
        onChange={handleChange}
        errors={errors}
        blurHandler={blurHandler}
      />
      <TextField
        label={'Пароль'}
        type={'password'}
        name={'password'}
        value={data.password}
        onChange={handleChange}
        errors={errors}
        blurHandler={blurHandler}
      />
      <FormButtons
        firstBtnText={'Войти'}
        secondBtnText={'Восстановить пароль'}
        secondBtnLink={'forget'}
        thirdBtnText={'Зарегистрироваться'}
        thirdBtnLink={'registration'}
      />
    </DynamicForm>
  )
}

export default AuthForm
