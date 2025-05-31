import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="page">
      <h1>Book Explorer</h1>
      <nav>
        <Link to="/login">Login</Link> | 
        <Link to="/my-library">My Library</Link>
      </nav>
    </div>
  )
}

export default Home