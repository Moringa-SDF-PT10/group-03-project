import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LibraryProvider } from './LibraryContext'; 
import { AuthProvider } from './AuthContext';      // Import AuthProvider
import ProtectedRoute from './ProtectedRoute';    
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Profile from './Profile';
import Books from './Books';
import BookDetails from './BookDetails';
import MyLibrary from './MyLibrary';
import Favorites from './Favorites';
import ReadingList from './ReadingList';
import styles from '../assets/css/App.module.css';

const App = () => {
  return (
    <AuthProvider>          {/* Wrap entire app with AuthProvider */}
      <LibraryProvider>
        <Router>
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
                  <Route path="/book/:id" element={<BookDetails />} />
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
        </Router>
      </LibraryProvider>
    </AuthProvider>
  );
};

export default App;
