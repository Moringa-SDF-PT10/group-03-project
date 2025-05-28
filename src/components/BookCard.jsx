import styles from "../assets/css/BookCard.module.css";

function BookCard({
  image,
  title,
  authors,
  year,
  publisher,
  subtitle,
  // description,
}) {
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
          {/* <p>{description}</p> */}
        </div>
      </div>
    </div>
  );
}

export default BookCard;
