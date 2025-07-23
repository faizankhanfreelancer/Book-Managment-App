// src/pages/AddBookPage.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook } from '../redux/actions/bookActions';
import '../styles/addbook.css'; // Ensure this file exists

const AddBookPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [book, setBook] = useState({
    title: '',
    author: '',
    genre: '',
    year: '',
  });

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!book.title || !book.author) {
      alert('Please fill in all required fields.');
      return;
    }
    dispatch(addBook(book));
    navigate('/books');
  };

  return (
    <div className="addbook-container">
      <div className="form-card">
        <h2>Add New Book 📘</h2>
        <form onSubmit={handleSubmit} className="book-form">
          <label>Title<span>*</span></label>
          <input
            type="text"
            name="title"
            placeholder="Book Title"
            value={book.title}
            onChange={handleChange}
            required
          />

          <label>Author<span>*</span></label>
          <input
            type="text"
            name="author"
            placeholder="Author Name"
            value={book.author}
            onChange={handleChange}
            required
          />

          <label>Genre</label>
          <input
            type="text"
            name="genre"
            placeholder="Genre (e.g., Fantasy)"
            value={book.genre}
            onChange={handleChange}
          />

          <label>Year</label>
          <input
            type="number"
            name="year"
            placeholder="Year of Publication"
            value={book.year}
            onChange={handleChange}
          />

          <button type="submit">➕ Add Book</button>
        </form>
      </div>
    </div>
  );
};

export default AddBookPage;
