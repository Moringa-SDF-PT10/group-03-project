import './home.css';

function Home() {
    return (
        <div >
            <div className="home">
                <div>
                    <h1>Home</h1>
                    <h2>Welcome to the Bookstore</h2>
                    <p>Your one-stop shop for all your reading needs! Connect with readers like you!</p>
                    <button className="explore-button">Explore Books</button>
                </div>
                <div className='home-images'>
                    <img src="src/assets/book2.jpg" alt="A library of books" />
                </div>
            </div>
            <div className='home-content'>
                <div className='discover'>
                    <img src="src/assets/books5.jpg" alt="book 5" />
                    <h2>Discover</h2>
                    <p>Browse and discover new books. Get customized recommendations</p>
                </div>
                <div className='connect'>
                    <img src="src/assets/books4.jpg" alt="book 4" />
                    <h2>Connect</h2>
                    <p>Join a community of book lovers. Share your thoughts and reviews.</p>
                </div>
                <div className='read'>
                    <img src="src/assets/books3.jpg" alt="book 3" />
                    <h2>Read</h2>
                    <p>Join discussions and chat about books you are reading and those you intend to read</p>
                </div>
            </div>
            
            <div className='book-shelf'>
                <div>
                    <img src="src/assets/books6.jpg" alt="image 6" />
                </div>
                <div>
                    <h2>Personal Bookshelf</h2>
                    <p>Shelf of Stories, Waiting to Unfold</p>
                    <p>Books I am Ready to Get Lost In</p>
                    <p>My Brain's Playground</p>
                    <p>My Little Book Haven</p>
                </div>
            </div>
            <div>
                <div>

                </div>
                <div className="get-started">
                    <h2>Get Started</h2>
                    <p>Sign up today to start exploring our collection, connecting with other readers, and sharing your love for books!</p>
                    <button className="get-started-button">Get Started</button>
                </div>
            </div>
            <div>
                <div>

                </div>
                <div>
                    <h2>Contact Us</h2>
                    <p>If you have any questions or need assistance, feel free to reach out to our support team. We're here to help!</p>
                    <button className="contact-button">Contact Support</button>
                </div>
            </div>
        </div> 
            
        
        
    );
}

export default Home;