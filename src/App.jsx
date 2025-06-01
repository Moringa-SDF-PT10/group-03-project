import { Routes, Route } from 'react-router-dom';
import Home from './features/HomePage/Home.jsx';
import Books from './features/HomePage/Books.jsx';
import Login from './features/HomePage/Login';
import styles from './App.module.css'
import ProfilePage from './features/authentication/ProfilePage.jsx';
import HomeNavbar from './features/HomePage/HomeNavbar.jsx';


function App() {

  return (
    <div className={styles['app-container']}>
      <main className={styles['main-content']}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<ProfilePage />} />
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
