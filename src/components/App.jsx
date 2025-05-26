import {useState} from 'react';
import './assets/App.css';
import Home from './Home.jsx';
import Books from './Books.jsx';
import Login from './Login.jsx';

function App() {
  const [page, setPage] = useState('home');

  let content;
  if (page === 'home') {
    content = <Home />;
  }
  else if (page === 'books') {
    content = <Books />;
  } else if (page === 'login') {
    content = <Login />;
  }

  return (
    <div className='main-container'>
      <nav className='navbar'>
        <div className='logo'>
          <img src="./assets/logo.png" alt="BookApp Logo" />
          Group-3 BookApp
        </div>
        <div>
          <button onClick={() => setPage('home')}>Home</button>
          <button onClick={() => setPage('books')}>Books</button>
          <button onClick={() => setPage('login')}>Login</button>
        </div>
      </nav>
      {content}
    </div>

  )
}
export default App;
