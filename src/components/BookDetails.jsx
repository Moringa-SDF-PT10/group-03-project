import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "../assets/css/BookDetails.module.css";

function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await fetch(
          `https://www.googleapis.com/books/v1/volumes/${id}`
        );
        const data = await res.json();
        setBook(data.volumeInfo);
      } catch (err) {
        console.error("Error fetching book details:", err);
      }
    };
    fetchBook();
  }, [id]);

  const removeHtmlTags = (html = "") => {
    const temp = document.createElement("div");
    temp.innerHTML = html;
    const paragraphs = temp.querySelectorAll("p");
    if (paragraphs.length > 0) {
      return Array.from(paragraphs).map((paragraph) =>
        paragraph.textContent.trim()
      );
    }
    return [temp.textContent.trim()];
  };

  if (!book) return <p>Loading...</p>;

  return (
    <div className={styles["book-details-container"]}>
      <div className={styles["book-details-content"]}>
        <div className={styles["book-info"]}>
          {book.imageLinks?.thumbnail && (
            <img
              className={styles["book-image"]}
              src={book.imageLinks.thumbnail}
              alt={book.title}
            />
          )}
          <div>
            <h2>{book.title}</h2>
            <h4>{book.subtitle}</h4>
            <p>
              <strong>Author(s): </strong> {book.authors?.join(", ")}
            </p>
            <p>
              <strong>Publisher: </strong> {book.publisher}
            </p>
            <p>
              <strong>Published Date: </strong> {book.publishedDate || "N/A"}
            </p>
            <p>
              <strong>Average Rating: </strong>
              {book.averageRating ? `${book.averageRating} / 5` : "No rating"}
            </p>
          </div>
        </div>
        <div className={styles.description}>
          {removeHtmlTags(book.description).map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          )) || "No description"}
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
