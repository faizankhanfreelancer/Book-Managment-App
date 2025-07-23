// src/components/SearchBar.js
import React from 'react';

const SearchBar = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Search by title or author"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{ marginRight: '1rem' }}
    />
  );
};

export default SearchBar;
