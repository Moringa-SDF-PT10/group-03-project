import React from 'react';

function Home() {
    return (
        <div className='home-container'>
            <div>
                <h1>Welcome to BookWorm<span>03</span></h1>
                <p>Your one-stop destination for all things books!</p>
                <p>Explore our collection, manage your library, and connect with fellow book lovers.</p>
            </div>
            <div>
                <img src="https://images.unsplash.com/photo-1521747116042-5a810fda9664?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80" alt="Books" className='home-image' />
            </div>
        </div>
    )
}

export default Home;