import styles from './ProfilePage.module.css';

function ProfilePage() {
    return (
        <div className={styles['profile-container']}>
            <h2 className={styles['profile-title']}>My Profile</h2>
            <div className={styles['profile-info']}>
                {/* Avatar, name, email */}
            </div>
            <button>Edit Profile</button>
            <section>
                <h3>Currently Reading</h3>
                {/* List of books */}
            </section>
            <section>
                <h3>Favorites</h3>
                {/* List of favorite books */}
            </section>
            <section>
                <h3>Reading History</h3>
                {/* List of previously read books */}
            </section>
            <section>
                <h3>My Reviews</h3>
                {/* List of reviews */}
            </section>
        </div>
    )
}

export default ProfilePage;