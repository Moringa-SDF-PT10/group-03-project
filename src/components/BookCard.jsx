import styles from "../assets/css/BookCard.module.css";
import { Star, NotebookPen } from 'lucide-react';
import { useLibrary } from './LibraryContext'; 

function BookCard({
  id,
  image,
  title,
  authors,
  year,
  publisher,
  subtitle,
  // description,
}) {
  const {
    favorites,
    readingList,
    toggleFavorite,
    toggleReadingList,
  } = useLibrary();

  const isFavorite = favorites.some((book) => book.id === id);
  const isInReadingList = readingList.some((book) => book.id === id);

  const book = {
    id,
    image,
    title,
    authors,
    year,
    publisher,
    subtitle,
    // description,
  };

  return (
    <div className={styles["book-card"]}>
      <div>
        <img src={image} alt={title} />
        <div className={styles.title}>
          <h3>{title}</h3>
          <em>
            <small>{subtitle}</small>
          </em>
        </div>
        <div className={styles.info}>
          <p>{authors ? authors.join(", ") : "Unknown"}</p>
          <small>
            {publisher} {year}
          </small>
        </div>
        <div className={styles['icons-container']}>
          <Star
            className={styles.icons}
            onClick={() => toggleFavorite(book)}
            color="#6F4E37"
            size={24}
            fill={isFavorite ? "#6F4E37" : "none"}
          />
          <NotebookPen
            className={styles.icons}
            onClick={() => toggleReadingList(book)}
            color="#6F4E37"
            size={24}
            fill={isInReadingList ? "#6F4E37" : "none"}
          />
        </div>
      </div>
    </div>
  );
}

export default BookCard;
