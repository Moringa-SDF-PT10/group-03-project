import { useLibrary } from "./LibraryContext";
import BookCard from "./BookCard";

function MyLibrary() {
  const { favorites, readingList } = useLibrary();

  return (
    <div>
      <h2>Favorites</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
        {favorites.length === 0 && <p>No favorites yet.</p>}
        {favorites.map((book) => (
          <BookCard 
          key={book.id}
          id={book.id}
          image={book.image}
          title={book.title}
          subtitle={book.subtitle}
          authors={book.authors}
          year={book.year}
          publisher={book.publisher}/>
        ))}
        </div>
      <h2>Reading List</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
        {readingList.length === 0 && <p>No favorites yet.</p>}
        {readingList.map((book) => (
          <BookCard 
          key={book.id}
          id={book.id}
          image={book.image}
          title={book.title}
          subtitle={book.subtitle}
          authors={book.authors}
          year={book.year}
          publisher={book.publisher}/>
        ))}
        </div>
    </div>
  );
}

export default MyLibrary;
