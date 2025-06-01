
import { useEffect } from "react";
import { useLibrary } from "./LibraryContext";
import BookCard from "./BookCard";
import styles from "../assets/css/Books.module.css";

function Books() {
   const { search, setSearch, booksData, setBooksData } = useLibrary();

  useEffect(  () => {
    if (booksData.length === 0) {
      const fetcher = async() => {      
        try {
          const response = await fetch(
            `https://www.googleapis.com/books/v1/volumes?q=react&maxResults=8`
          );
    
          if (!response.ok) {
            throw new Error(`HTTP error. Status: ${response.status}`);
          }
    
          const data = await response.json();
          setBooksData(data.items);
          //console.log(data.items);
        } catch (error) {
          console.error(`Fetch error: ${error}`);
        }
      }
      fetcher();
    }
    }, [booksData, setBooksData]
  )

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=40`
      );

      if (!response.ok) {
        throw new Error(`HTTP error. Status: ${response.status}`);
      }

      const data = await response.json();
      setBooksData(data.items);
      console.log(data.items);
    } catch (error) {
      console.error(`Fetch error: ${error}`);
    }
  };

  return (
    <div className={styles["book-list"]}>
      <form className={styles.search} onSubmit={handleSubmit}>
        <input
          placeholder='Search for a book...'
          type='text'
          value={search}
          onChange={handleChange}
        />
        <button type='submit'>Search</button>
      </form>
      <div className={styles.background}></div>
      <div className={styles.books}>
        {booksData.map((book) => {
          let thumbnail =
            book.volumeInfo.imageLinks &&
            book.volumeInfo.imageLinks.smallThumbnail;
          let title = book.volumeInfo && book.volumeInfo.title;
          let subtitle = book.volumeInfo && book.volumeInfo.subtitle;
          let authors = book.volumeInfo && book.volumeInfo.authors;
          let year = book.volumeInfo && book.volumeInfo.publishedDate;
          let publisher = book.volumeInfo && book.volumeInfo.publisher;
          // let description = book.volumeInfo && book.volumeInfo.description;
          if (thumbnail != undefined)
            return (
              <BookCard
                key={book.id}
                id={book.id}
                image={thumbnail}
                title={title}
                authors={authors}
                year={year}
                publisher={publisher}
                subtitle={subtitle}
                // description={description}
              />
            );
        })}
      </div>
    </div>
  );
}

export default Books;
