// src/pages/BookDetailPage.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../styles/bookdetail.css'; // Ensure this file exists

const generateParagraph = (book) => {
  const { title, author, genre } = book;

  return `“${title}” by ${author} is a remarkable example of ${genre || 'literary'} brilliance.
  This book offers a rich experience for readers seeking compelling stories, unforgettable characters,
  and a journey through imagination and insight. Whether you're new to reading or a lifelong enthusiast,
  this title adds great value to any bookshelf.`;
};

const BookDetailPage = () => {
  const { id } = useParams();
  const book = useSelector((state) => state.books.find((b) => b.id === id));

  if (!book) return <div className="bookdetail-container">Book not found.</div>;

  return (
    <div className="bookdetail-container">
      <h2>{book.title}</h2>
      <p className="caption">"A detailed view of the selected book"</p>

      <div className="book-info">
        <p><strong>📖 Title:</strong> {book.title}</p>
        <p><strong>✍️ Author:</strong> {book.author}</p>
        <p><strong>📚 Genre:</strong> {book.genre || 'N/A'}</p>
        <p><strong>📅 Published Year:</strong> {book.year || 'Unknown'}</p>
      </div>

      <div className="book-paragraph">
        <p>{generateParagraph(book)}</p>
      </div>

      <Link to="/books" className="back-btn">← Back to Book List</Link>
    </div>
  );
};

export default BookDetailPage;
