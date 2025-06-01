import { Link } from "react-router-dom";
import styles from "./ProfileNavbar.module.css";

function ProfileNavbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <h1>👤 My Profile</h1>
            </div>
            <div className={styles["nav-links"]}>
                <Link to="logout">Logout</Link>
            </div>
        </nav>
    );
}
export default ProfileNavbar;