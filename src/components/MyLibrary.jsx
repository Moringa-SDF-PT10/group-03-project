import { useState } from "react";
import { useLibrary } from "./LibraryContext";
import BookCard from "./BookCard";
import styles from "../assets/css/MyLibrary.module.css";
import ProfileNavbar from "./ProfileNavbar";
import HomeNavbar from "./HomeNavbar";

function MyLibrary() {
  const { favorites, readingList } = useLibrary();

  const [showFavorites, setShowFavorites] = useState(false);
  const [showReadingList, setShowReadingList] = useState(false);

  return (
    <div>
      <HomeNavbar />
      <h1>Personal Bookshelf</h1>
      <h2
        className={styles.library}
        onClick={() => setShowFavorites((prev) => !prev)}
      >
        Your Favorite Books
        <span>{showFavorites ? "▼" : "▶"}</span>
      </h2>
      {showFavorites && (
        <div className={styles["favorites-container"]}>
          {favorites.length === 0 && <p>No favorites yet.</p>}
          {favorites.map((book) => (
            <BookCard key={book.id} {...book} />
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
        <div className={styles["reading-list-container"]}>
          {readingList.length === 0 && <p>No reading list yet.</p>}
          {readingList.map((book) => (
            <BookCard key={book.id} {...book} />
          ))}
        </div>
      )}
    </div>
  );
}

export default MyLibrary;
