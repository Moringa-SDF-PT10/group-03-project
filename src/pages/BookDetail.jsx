// src/pages/BookDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const BookDetail = () => {
  const { id } = useParams();
  
  return (
    <div className="book-detail">
      <h1>Book Details</h1>
      <p>Viewing book ID: {id}</p>
      {/* Add your book detail content here */}
    </div>
  );
};

export default BookDetail;