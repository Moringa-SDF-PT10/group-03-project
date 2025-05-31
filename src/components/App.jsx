import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Books from "./Books";
import MyLibrary from "./MyLibrary";
import { LibraryProvider } from "./LibraryContext";
import BookDetails from "./BookDetails";



function App() {
  return (
    <LibraryProvider>
      <Router>
        <nav className="nav">
          <Link to="/books">Books</Link>
          <Link to="/my-library">Library</Link>
        </nav>
        <Routes>
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="/books" element={<Books />} />
          <Route path="/my-library" element={<MyLibrary />} />
          
        </Routes>
      </Router>
    </LibraryProvider>
    
  );
}

export default App;
