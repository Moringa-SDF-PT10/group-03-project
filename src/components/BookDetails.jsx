import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

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

  if (!book) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px" }}>
      {book.imageLinks?.thumbnail && (
        <img src={book.imageLinks.thumbnail} alt={book.title} />
      )}
      <h2>{book.title}</h2>
      <h4>{book.subtitle}</h4>
      <p><strong>Authors:</strong> {book.authors?.join(", ")}</p>
      <p><strong>Publisher:</strong> {book.publisher}</p>
      <p><strong>Published Date:</strong> {book.publishedDate}</p>
      <p><strong>Category:</strong> {book.categories ? book.categories.join(", ") : "Unknown"}</p>
      <p><strong>Language:</strong> {book.language ? book.language.toUpperCase() : "Unknown"}</p>
      <p><strong>Average Rating:</strong> {book.averageRating ? `${book.averageRating} / 5` : "No rating"}</p>
      <p><strong>Description:</strong> {book.description || "No description"}</p>      
    </div>
  );
}

export default BookDetails;
