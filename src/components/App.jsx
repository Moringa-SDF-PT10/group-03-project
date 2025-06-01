import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Books from "./Books";
import MyLibrary from "./MyLibrary";
import { LibraryProvider } from "./LibraryContext";


function App() {
  return (
    <LibraryProvider>
      <Router>
        <nav>
          <Link to="/">Books</Link>
          <Link to="/mylibrary">My Library</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/mylibrary" element={<MyLibrary />} />
        </Routes>
      </Router>
    </LibraryProvider>
      
    
  );
}

export default App;
