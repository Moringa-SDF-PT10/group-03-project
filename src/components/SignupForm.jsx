import React, { useState } from 'react'

const SignupForm = ({ onSignup }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords don't match")
      return
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters")
      return
    }

    onSignup(formData.name, formData.email, formData.password)
  }

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <input
        type="text"
        placeholder="Full Name"
        value={formData.name}
        onChange={(e) => setFormData({...formData, name: e.target.value})}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({...formData, email: e.target.value})}
        required
      />
      <input
        type="password"
        placeholder="Password (min 6 characters)"
        value={formData.password}
        onChange={(e) => setFormData({...formData, password: e.target.value})}
        minLength={6}
        required
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={formData.confirmPassword}
        onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
        required
      />
      <button type="submit">Sign Up</button>
      {error && <p className="error">{error}</p>}
    </form>
  )
}

export default SignupForm