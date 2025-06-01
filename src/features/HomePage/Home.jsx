import React from 'react';

function Home() {
    return (
        <div className='home-container'>
            <div>
                <div className='home-header'>
                    <h1>Welcome to BookWorm<span>03</span></h1>
                    <p>Your one-stop destination for all things books!</p>
                    <p>Explore our collection, manage your library, and connect with fellow book lovers.</p>
                </div>
                <div className='home-image-container1'>
                    <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=900&q=80" alt="Books" className='home-image' />
                </div>
            </div>
            <div>
                <div className='home-image-container2'>
                    <img src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=80" alt="Library" className='home-image' />
                </div>
                <h2>What BookWorm03 Offers</h2>
                <ul>
                    <li>Extensive book collection</li>
                    <li>User-friendly library management</li>
                    <li>Community features to connect with other readers</li>
                    <li>Personalized recommendations</li>
                </ul>
            </div>
            <div>
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