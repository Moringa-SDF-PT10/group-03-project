import styles from './ProfilePage.module.css';
import ProfileNavbar from './ProfileNavbar.jsx';
import { useState } from 'react';


function ProfilePage() {
    return (
        <div className={styles['profile-container']}>
            <ProfileNavbar />
            <h2 className={styles['profile-title']}>My Profile</h2>
            <div className={styles['profile-info']}>
                <p>Avatar, name, email to come here</p>
            </div>
            <button>Edit Profile</button>
            <section>
                <h3>My Library</h3>
                {/* <MyLibrary /> */}
            </section>
            <section>
                <h3>Favorites</h3>
                {/* <Favorites /> */}
            </section>
            <section>
                <h3>Reading List</h3>
                {/* <ReadingList /> */}
            </section>
        </div>
    )
}

export default ProfilePage;