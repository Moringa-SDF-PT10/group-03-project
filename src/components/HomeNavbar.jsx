import { Link } from 'react-router-dom';
import styles from '../assets/css/HomeNavbar.module.css';


function HomeNavbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <h1>📚BookWorm<span>03</span></h1>
            </div>
            <div className={styles['nav-links']}>
                <Link to="/">Home</Link>
                <Link to="/books">Books</Link>
                <Link to="/login">Login</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/my-library">My Library</Link>
            </div>
      </nav>
    )
}

export default HomeNavbar;