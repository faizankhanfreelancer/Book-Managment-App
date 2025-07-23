import React, { useState } from 'react';
import './RandomSearchBar.css';

const sampleSuggestions = [
  "The Alchemist", "1984", "Sapiens", "Pride and Prejudice",
  "The Hobbit", "Harry Potter", "The Great Gatsby",
  "To Kill a Mockingbird", "The Da Vinci Code", "Steve Jobs"
];

const RandomSearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [suggestion, setSuggestion] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleRandom = () => {
    const random = sampleSuggestions[Math.floor(Math.random() * sampleSuggestions.length)];
    setQuery(random);
    setSuggestion(`Try: ${random}`);
    if (onSearch) onSearch(random);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(query);
  };

  return (
    <form className="random-search" onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search books..."
      />
      <button type="submit">🔍</button>
      <button type="button" onClick={handleRandom}>🎲 Random</button>
      {suggestion && <p className="suggestion">{suggestion}</p>}
    </form>
  );
};

export default RandomSearchBar;
