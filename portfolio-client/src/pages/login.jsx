import React, { useState } from 'react'

const Login = () => {
  const [values, setValues] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState(false)

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
      setError('Todos los campos son obligatorios')
      return
    }

    setError(false)
    console.log(values)
  }

  return (
    <main className='login'>
      <form onSubmit={handleSubmit} className='login-form'>
        <h1>Iniciar Sesion</h1>
        <input
          type='text'
          placeholder='Email'
          value={email}
          name='email'
          onChange={handleChange}
        />
        <input
          type='password'
          placeholder='Contraseña'
          value={password}
          name='password'
          onChange={handleChange}
        />
        <button className='button' type='submit'>Iniciar Sesion</button>
        {error && <span style={{ color: 'crimson' }}>{error}</span>}
      </form>
      <img
        className='login-image'
        src='https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        alt=''
      />
    </main>
  )
}

export default Login
