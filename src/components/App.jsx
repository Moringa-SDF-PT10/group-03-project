import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LibraryProvider } from './LibraryContext'; 
import { AuthProvider } from './AuthContext';      
import ProtectedRoute from './ProtectedRoute';    
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Profile from './Profile';
import Books from './Books';
import BookDetails from './BookDetails';
import Favorites from './Favorites';
import ReadingList from './ReadingList';
import styles from '../assets/css/App.module.css';

const App = () => {
  return (
    <AuthProvider>         
      <LibraryProvider>
        <Router>
          <div className={styles['app-container']}>
            <main className={styles['main-content']}>
              <Routes>                
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                
                <Route element={<ProtectedRoute />}>
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/books" element={<Books />} />
                  <Route path="/book/:id" element={<BookDetails />} />
                  <Route path="/favorites" element={<Favorites />} />
                  <Route path="/reading-list" element={<ReadingList />} />
                </Route>
              </Routes>
            </main>
            <footer>
              <p>© 2025 Last Chapter. All rights reserved.</p>
              <p>Made with ❤️ by Last Chapter Team</p>
            </footer>
          </div>
        </Router>
      </LibraryProvider>
    </AuthProvider>
  );
};

export default App;
