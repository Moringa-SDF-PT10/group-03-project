import { useLibrary } from "./LibraryContext";
import BookCard from "./BookCard";
import HomeNavbar from "./HomeNavbar";
import styles from "../assets/css/Favourites.module.css";

function FavoritesPage() {
  const { favorites } = useLibrary();

  return (
    <>
      <HomeNavbar />
      <div className={styles["favourites-container"]}>
        <h1 className={styles.title}>Your Favorite Books</h1>
        <div
          className={
            favorites.length === 0 ? styles["no-favourites"] : styles.favourites
          }
        >
          {favorites.length === 0 ? (
            <p>No favorites yet.</p>
          ) : (
            favorites.map((book) => <BookCard key={book.id} {...book} />)
          )}
        </div>
      </div>
    </>
  );
}

export default FavoritesPage;
