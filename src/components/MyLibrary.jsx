import { useLibrary } from "./LibraryContext";
import BookCard from "./BookCard";
import { NotebookPen } from 'lucide-react'
import styles from '../assets/css/MyLibrary.module.css'

function MyLibrary() {
  const { favorites, readingList } = useLibrary();

  return (
    <div>
      <h2>Favorites</h2>
      <div className={styles['bookshelf-items']}>
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
      <div className={styles['bookshelf-items']}>
        {readingList.length === 0 && <p>No books on your reading list. To add a book to your reading list, click on the <NotebookPen color="#6F4E37" size={12.5} /> icon.</p>}
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
