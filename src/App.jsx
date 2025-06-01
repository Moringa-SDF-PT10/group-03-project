import { Link, Routes, Route } from 'react-router-dom';
import Home from './features/HomePage/Home.jsx';
import Books from './features/HomePage/Books.jsx';
import Login from './features/HomePage/Login';
import './App.module.css'


function App() {

  return (
    <div className='app-container'>
      <nav className='navbar'>
        <div className='logo'>
          <h1>📚BookWorm<span>03</span></h1>
        </div>
        <div className='nav-links'>
          <Link to="/">Home</Link>
          <Link to="/books">Books</Link>
          <Link to="/login">Login</Link>
        </div>
      </nav>
      <main className='main-content'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      </main>
      <footer>
        <p>© 2025 BookWorm<span>03</span>. All rights reserved.</p>
        <p>Made with ❤️ by BookWorm03 Team</p>
      </footer>
    </div>
  )
}

export default App
