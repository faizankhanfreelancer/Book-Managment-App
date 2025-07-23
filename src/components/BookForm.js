// src/components/BookForm.js
import React, { useState } from 'react';

const BookForm = ({ onSubmit, defaultValues = {} }) => {
  const [title, setTitle] = useState(defaultValues.title || '');
  const [author, setAuthor] = useState(defaultValues.author || '');
  const [genre, setGenre] = useState(defaultValues.genre || '');
  const [year, setYear] = useState(defaultValues.year || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author || (year && isNaN(Number(year)))) {
      alert('Please fill in required fields with valid values.');
      return;
    }
    onSubmit({ ...defaultValues, title, author, genre, year });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <input
        placeholder="Genre"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      />
      <input
        placeholder="Year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default BookForm;
