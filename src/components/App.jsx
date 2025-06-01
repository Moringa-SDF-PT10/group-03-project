import { Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Books from './Books.jsx';
import Login from './Login';
import styles from '../assets/css/App.module.css';
import Signup from './Signup';
import Profile from './Profile.jsx';
import BookDetail from './BookDetail.jsx';
import MyLibrary from './MyLibrary.jsx';
import Favorites from './Favorites.jsx';
import ReadingList from './ReadingList.jsx';
import ProtectedRoute from './ProtectedRoute.jsx';


function App() {

  return (
    <div className={styles['app-container']}>
      <main className={styles['main-content']}>
        <Routes>
          //Public Routes
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/books" element={<Books />} />
            <Route path="/book/:id" element={<BookDetail />} />
            <Route path="/my-library" element={<MyLibrary />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/reading-list" element={<ReadingList />} />
        </Route>
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