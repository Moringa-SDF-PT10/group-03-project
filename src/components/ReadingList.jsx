import { useLibrary } from "./LibraryContext";
import BookCard from "./BookCard";
import HomeNavbar from "./HomeNavbar";
import styles from "../assets/css/ReadingList.module.css";

function ReadingListPage() {
  const { readingList } = useLibrary();

  return (
    <>
      <HomeNavbar />
      <div className={styles["reading-list-container"]}>
        <h1 className={styles.title}>Your Reading List</h1>
        <div
          className={
            readingList.length === 0
              ? styles["no-reading-list"]
              : styles["reading-list"]
          }
        >
          {readingList.length === 0 ? (
            <p>No reading list yet.</p>
          ) : (
            readingList.map((book) => <BookCard key={book.id} {...book} />)
          )}
        </div>
      </div>
    </>
  );
}

export default ReadingListPage;
