import { Navigate, useNavigate } from "react-router-dom";
import styles from "../assets/css/ProfileNavbar.module.css";
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
        </nav>
    );
}
export default ProfileNavbar;