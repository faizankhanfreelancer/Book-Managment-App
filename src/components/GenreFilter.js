// src/components/GenreFilter.js
import React from 'react';

const GenreFilter = ({ genres, selectedGenre, onChange }) => {
  return (
    <select value={selectedGenre} onChange={(e) => onChange(e.target.value)}>
      <option value="">All Genres</option>
      {genres.map((genre) => (
        <option key={genre} value={genre}>
          {genre}
        </option>
      ))}
    </select>
  );
};

export default GenreFilter;
