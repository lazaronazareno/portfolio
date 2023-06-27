import React, { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import AlertContext from '../context/alert/alertContext'
import AuthContext from '../context/auth/authContext'
import { LanguageContext } from '../context/langContext'
import { dictionaryList } from '../lang'
import { Text } from '../lang/text'

const Login = () => {
  const navigate = useNavigate()

  const alertContext = useContext(AlertContext)
  const { alert, showAlert } = alertContext

  const authContext = useContext(AuthContext)
  const { isAuth, error, login } = authContext

  const { userLanguage } = useContext(LanguageContext)

  const [values, setValues] = useState({
    email: '',
    password: ''
  })

  const { email, password } = values

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (email.trim() === '' || password.trim() === '') {
      showAlert('Todos los campos son obligatorios', 'error')
      return
    }

    login({ email, password })
  }

  useEffect(() => {
    if (isAuth) {
      navigate('/admin')
    }
    if (error) {
      showAlert(error.msg, error.category)
    }
  }, [error, isAuth])

  return (
    <main className='login'>
      <form onSubmit={handleSubmit} className='login-form'>
        <h1><Text tid='login' /></h1>
        <input
          type='text'
          placeholder='Email'
          value={email}
          name='email'
          onChange={handleChange}
        />
        <input
          type='password'
          placeholder={userLanguage === 'es' ? dictionaryList.es.password : dictionaryList.en.password}
          value={password}
          name='password'
          onChange={handleChange}
        />
        <button className='button' type='submit'><Text tid='login' /></button>
      </form>
      <div
        className='login-image'
      />
      {alert
        ? (
          <div className={`error-alert ${alert.category}`}>
            {alert.msg}
          </div>
          )
        : null}
    </main>
  )
}

export default Login
