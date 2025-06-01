import styles from './Home.module.css';
import { useState } from 'react';
import HomeNavbar from './HomeNavbar';

function Home() {
    const [query, setQuery] = useState('');
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    async function handleSearch(element) {
        element.preventDefault();
        if (!query.trim()) return ;
        setLoading(true);
        setError('');
        setBooks([]);
        try {
            const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&maxResults=40`);
            if (!response.ok) {
                throw new Error('Failed to fetch books');
            }
            const data = await response.json();
            setBooks(data.items || []);
        } catch (err) {
            setError('Could not fetch books. Please try again later.');
        } finally {
            setLoading(false);
        }
    }


    return (
        <div className={styles['home-container']}>
            <HomeNavbar />

            <div className={styles['search-section']}>
                <h2>Search for Books</h2>
                <form onSubmit={handleSearch} className={styles['search-form']}>
                    <input
                        type="text"
                        placeholder="Enter book title, author, or keyword..."
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                        className={styles['search-input']}
                    />
                    <button type="submit" className={styles['search-btn']}>Search</button>
                </form>
                {loading && <p>Loading...</p>}
                {error && <p className={styles['error']}>{error}</p>}
                {books.length > 0 && (
                    <ul className={styles['search-results']}>
                        {books.map((book) => (
                            <li key={book.id} className={styles['book-item']}>
                                <strong>{book.volumeInfo.title}</strong> 
                                {book.volumeInfo.authors && (
                                    <> by {book.volumeInfo.authors.join(', ')}</>
                                )}
                            </li>
                        ))}
                    </ul>
                )}
                {(!loading && books.length === 0 && query) && <p></p> }
            </div>

            <div className={styles['home-header-container']}>
                <div className={styles['home-header']}>
                    <h1>Welcome to BookWorm<span>03</span></h1>
                    <p>Your one-stop destination for all things books!</p>
                    <p>Explore our collection, manage your library, and connect with fellow book lovers.</p>
                </div>
                <div className={styles['home-image-container1']}>
                    <img src="https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=900&q=80" alt="Books" className='home-image' />
                </div>
            </div>

            <div className={styles['home-content']}>
                <div className={styles['home-image-container2']}>
                    <img src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=80" alt="Library" className='home-image' />
                </div>
                <h2>About BookWorm03</h2>
                <ul>
                    <li>Extensive book collection</li>
                    <li>User-friendly library management</li>
                    <li>Community features to connect with other readers</li>
                    <li>Personalized recommendations</li>
                </ul>
            </div>
            <div className={styles['features-section']}>
                <h2>Features</h2>
                <ul>
                    <li>Search and filter books</li>
                    <li>Track your reading progress</li>
                    <li>Bookmark your favorite books</li>
                    <li>Create and manage reading lists</li>
                    <li>Rate and review books</li>
                    <li>Access to exclusive content and events</li>
                </ul>
            </div>
        </div>
    )
}

export default Home;