import { Link } from "react-router-dom";
import styles from "../assets/css/HomeNavbar.module.css";
import { BookCopy } from "lucide-react";

function HomeNavbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to='/'>
          <h1>
            <BookCopy /> Last Chapter
          </h1>
        </Link>
      </div>
      <div className={styles["nav-links"]}>
        <Link to='/'>Home</Link>
        <Link to='/books'>Books</Link>
        <Link to='/login'>Login</Link>
        <Link to='/profile'>Profile</Link>
        <Link to='/my-library'>My Library</Link>
      </div>
    </nav>
  );
}

export default HomeNavbar;
