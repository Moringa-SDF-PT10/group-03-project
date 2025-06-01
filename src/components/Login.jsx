import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './AuthContext'
import LoginForm from './LoginForm'

const Login = () => {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [error, setError] = useState('')

  const handleLogin = (email, password) => {
    if (login(email, password)) {
      navigate('/profile')
    } else {
      setError('Invalid email or password')
    }
  }

  return (
    <div className="auth-page">
      <h1>Login</h1>
      {error && <p className="error">{error}</p>}
      <LoginForm onLogin={handleLogin} />
      <p className="auth-switch">
        Don't have an account? <a href="/signup">Sign up</a>
      </p>
    </div>
  )
}

export default Login