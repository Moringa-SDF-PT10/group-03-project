import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Books from "./Books";
import MyLibrary from "./MyLibrary";
import { LibraryProvider } from "./LibraryContext";


function App() {
  return (
      <Router>
        <nav className="nav">
          <Link to="/">All Books</Link>
          <Link to="/library">My Library</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/library" element={<MyLibrary />} />
        </Routes>
      </Router>
    
  );
}

export default App;
