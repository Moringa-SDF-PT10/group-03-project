import { useState } from "react";
import { useLibrary } from "./LibraryContext";
import BookCard from "./BookCard";
<<<<<<< HEAD
import { NotebookPen } from 'lucide-react'
import styles from '../assets/css/MyLibrary.module.css'
=======
import styles from "../assets/css/MyLibrary.module.css"; 
>>>>>>> d32d9eac2e547a3c92649ba15a571621e24f6ef3

function MyLibrary() {
  const { favorites, readingList } = useLibrary();

  const [showFavorites, setShowFavorites] = useState(false);
  const [showReadingList, setShowReadingList] = useState(false);

  return (
    <div>
<<<<<<< HEAD
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
=======
      <h1>Personal Bookshelf</h1>
      <h2 
         className={styles.library}
         onClick={() => setShowFavorites((prev) => !prev)}
      >
         Your Favorite Books
         <span>{showFavorites ? "▼" : "▶"}</span>
      </h2>
      {showFavorites && (
        <div
          className={styles["favorites-container"]} >
          {favorites.length === 0 && <p>No favorites yet.</p>}
          {favorites.map((book) => (
            <BookCard
              key={book.id}
              {...book}
            />
          ))}
        </div>
      )}

      <h2
        onClick={() => setShowReadingList((prev) => !prev)}
        className={styles.library}
      >
        Your Reading List
        <span>{showReadingList ? "▼" : "▶"}</span> 
      </h2>
      {showReadingList && (
        <div
           className={styles["reading-list-container"]}>
          {readingList.length === 0 && <p>No reading list yet.</p>}
          {readingList.map((book) => (
            <BookCard
              key={book.id}
              {...book}
            />
          ))}
>>>>>>> d32d9eac2e547a3c92649ba15a571621e24f6ef3
        </div>
      )}
    </div>
  );
}

export default MyLibrary;
