import { Navigate, useNavigate } from "react-router-dom";
import styles from "./ProfileNavbar.module.css";
import { use } from "react";

function ProfileNavbar() {
    const navigate = useNavigate();

    function handleLogout() {
        localStorage.removeItem("token"); // clearing authentication tokens
        navigate("/login"); // redirecting to login page
    }
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <h1>👤 My Profile</h1>
            </div>
            <div>
                <button onClick={handleLogout} className={styles.logoutBtn}>Logout</button>
            </div>
        </nav>
    );
}
export default ProfileNavbar;