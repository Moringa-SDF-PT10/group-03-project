import styles from "../assets/css/BookCard.module.css";

function BookCard({ image, title, authors, year, publisher, subtitle }) {
  return (
    <div className={styles["book-card"]}>
      <div className={styles.title}>
        <h3>{title}</h3>
        <em>
          <small>{subtitle}</small>
        </em>
      </div>
      <div>
        <img src={image} alt={title} />
        <div className={styles.info}>
          <p>{authors ? authors.join(", ") : "Unknown"}</p>
          <small>
            {publisher} {year}
          </small>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
