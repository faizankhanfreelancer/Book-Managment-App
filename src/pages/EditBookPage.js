// src/pages/EditBookPage.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateBook } from '../redux/actions/bookActions';

import '../styles/editbook.css'; // Make sure this file exists

const EditBookPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const book = useSelector((state) =>
    state.books.find((b) => b.id === id)
  );

  const [formData, setFormData] = useState({
    title: '',
    author: '',
    genre: '',
    year: '',
    price: ''
  });

  useEffect(() => {
    if (book) {
      setFormData(book);
    }
  }, [book]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateBook(formData));
    navigate('/books');
  };

  if (!book) {
    return (
      <div className="edit-container">
        <h2>Book not found</h2>
        <button onClick={() => navigate('/books')} className="back-btn">Go Back</button>
      </div>
    );
  }

  return (
    <div className="edit-container">
      <h2>Edit Book 📖</h2>
      <form className="edit-form" onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <label>Author</label>
        <input
          name="author"
          value={formData.author}
          onChange={handleChange}
          required
        />

        <label>Genre</label>
        <input
          name="genre"
          value={formData.genre}
          onChange={handleChange}
        />

        <label>Year</label>
        <input
          name="year"
          type="number"
          value={formData.year}
          onChange={handleChange}
        />

        <label>Price ($)</label>
        <input
          name="price"
          type="number"
          step="0.01"
          value={formData.price}
          onChange={handleChange}
        />

        <button className="save-btn" type="submit">💾 Save Changes</button>
      </form>
    </div>
  );
};

export default EditBookPage;
