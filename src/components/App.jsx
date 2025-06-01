import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LibraryProvider } from './contexts/LibraryContext'; // adjust the path
import ProtectedRoute from './components/ProtectedRoute';     // adjust the path
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Books from './pages/Books';
import BookDetail from './pages/BookDetail';
import MyLibrary from './pages/MyLibrary';
import Favorites from './pages/Favorites';
import ReadingList from './pages/ReadingList';
import styles from './App.module.css'; // your styles

const App = () => {
  return (
    <LibraryProvider>
      <div className={styles['app-container']}>
        <main className={styles['main-content']}>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            {/* Protected Routes */}
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
    </LibraryProvider>
  );
};

export default App;
