import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>📚 Welcome to Book Explorer</h1>
      <p>Use the app to search and save your favorite books.</p>
      <Link to="/login">Go to Login</Link>
    </div>
  );
}

export default Home;
