// src/components/BookItem.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/actions/bookActions';

const BookItem = ({ book }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="book-row">
      <div className="book-details">
        <h3>{book.title}</h3>
        <p>Author: {book.author}</p>
        <p>Genre: {book.genre} | Year: {book.year}</p>
      </div>
      <div className="book-actions">
        <Link to={`/books/${book.id}`} className="button small">View</Link>
        <Link to={`/books/edit/${book.id}`} className="button small">Edit</Link>
        <button className="button small delete" onClick={() => dispatch(deleteBook(book.id))}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookItem;
