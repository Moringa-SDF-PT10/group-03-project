import  { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './AuthContext'
import LoginForm from './LoginForm'
import HomeNavbar from './HomeNavbar'
import styles from '../assets/css/Login.module.css'

const Login = () => {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [error, setError] = useState('')

  const handleLogin = (email, password) => {
    if (login(email, password)) {
      navigate('/books')
    } else {
      setError('Invalid email or password')
    }
  }

  return (
    <div>
      <div className={styles["navbar-container"]}>
        <HomeNavbar />
      </div>

      <div className={styles["auth-page"]}>
        <div>
          <h1>Login</h1>
          {error && <p className={styles["error"]}>{error}</p>}
          <LoginForm onLogin={handleLogin} />
          <p className={styles["auth-switch"]}>
            Don't have an account? <a href="/signup">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
