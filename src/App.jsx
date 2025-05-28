import { Link, Routes, Route } from 'react-router-dom';
import styles from './App.module.css';
import Home from './pages/Home.jsx';
import Books from './pages/Books.jsx';
import Login from './features/authentication/Login.jsx';

function App() {

  return (
    <>
      <div className={styles.App}>
        <nav className={styles.navbar}>
          <Link to="/" className={styles.navItem}>Home</Link>
          <Link to="/books" className={styles.navItem}>Books</Link>
          <Link to="/login" className={styles.navItem}>Login</Link>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<Books />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <footer>
          <div className={styles.footer}>
            <p>&copy; 2023 Bookstore. All rights reserved.</p>
            <p>Follow us on social media!</p>
            <div className={styles.socialLinks}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
export default App;