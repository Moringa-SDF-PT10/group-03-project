import { useLibrary } from "./LibraryContext";
import BookCard from "./BookCard";
import HomeNavbar from "./HomeNavbar";
import styles from "../assets/css/MyLibrary.module.css";

function ReadingListPage() {
  const { readingList } = useLibrary();

  return (
    <div className={styles["reading-list-container"]}>
      <HomeNavbar />
      <div>
        <h1>Your Reading List</h1>
        <div className={styles['reading-list']}>
          {readingList.length === 0 ? (
            <p>No reading list yet.</p>
          ) : (
            readingList.map((book) => <BookCard key={book.id} {...book} />)
          )}
        </div>
      </div>
    </div>
  );
}

export default ReadingListPage;
