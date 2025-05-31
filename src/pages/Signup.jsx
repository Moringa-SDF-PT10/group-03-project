// src/pages/Signup.jsx
import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate()
  const { signup } = useAuth()
  const [error, setError] = useState('')

  const handleSignup = (name, email, password) => {
    if (signup(name, email, password)) {
      navigate('/profile') // Redirect to profile after signup
    } else {
      setError('Email already exists')
    }
  }

  return (
    <div className="auth-page">
      <h1>Create Account</h1>
      {error && <p className="error">{error}</p>}
      <SignupForm onSignup={handleSignup} />
      <p className="auth-switch">
        Already have an account? <a href="/login">Log in</a>
      </p>
    </div>
  )
}

export default Signup