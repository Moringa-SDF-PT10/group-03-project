import { useLibrary } from "./LibraryContext";
import BookCard from "./BookCard";
import HomeNavbar from "./HomeNavbar";
import styles from "../assets/css/MyLibrary.module.css";

function FavoritesPage() {
  const { favorites } = useLibrary();

  return (
    <div>
      <HomeNavbar />
      <h1>Your Favorite Books</h1>
      <div className={styles["favorites-container"]}>
        {favorites.length === 0 ? (
          <p>No favorites yet.</p>
        ) : (
          favorites.map((book) => <BookCard key={book.id} {...book} />)
        )}
      </div>
    </div>
  );
}

export default FavoritesPage;
