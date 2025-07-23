import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import GenreFilter from '../components/GenreFilter';
import Sidebar from '../components/Sidebar';
import { deleteBook, addBook } from '../redux/actions/bookActions';
import '../styles/booklist.css';

const BookListPage = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const [genre, setGenre] = useState('');
  const [deletedBook, setDeletedBook] = useState(null);

  useEffect(() => {
    document.body.classList.add('sidebar-offset');
    return () => document.body.classList.remove('sidebar-offset');
  }, []);

  const genres = [...new Set(books.map((b) => b.genre).filter(Boolean))];

  const filtered = books
    .filter(
      (b) =>
        (b.title.toLowerCase().includes(search.toLowerCase()) ||
          b.author.toLowerCase().includes(search.toLowerCase())) &&
        (genre ? b.genre === genre : true)
    )
    .sort((a, b) => a.title.localeCompare(b.title));

  const handleDelete = (id) => {
    const bookToDelete = books.find((b) => b.id === id);
    if (window.confirm(`Are you sure you want to delete "${bookToDelete.title}"?`)) {
      dispatch(deleteBook(id));
      setDeletedBook(bookToDelete);
    }
  };

  const handleRecover = () => {
    if (deletedBook) {
      dispatch(addBook(deletedBook));
      setDeletedBook(null);
    }
  };

  return (
    <>
      <Sidebar />

      {/* ✅ Top Navbar only on BookListPage */}
      <nav className="top-navbar">
        <ul>
          <li><Link to="/books">🏠 Home</Link></li>
          <li><a href="#about">ℹ️ About</a></li>
          <li><a href="#brand">🏷️ Brand</a></li>
          <li><a href="#contact">📩 Contact</a></li>
        </ul>
      </nav>

      <div className="booklist-container" style={{ marginLeft: '220px', padding: '1rem' }}>
        <div className="booklist-header">
          <h1 className="booklist-title">📚 BOOK MANAGEMENT</h1>
          <button
            className="toggle-dark"
            onClick={() => document.body.classList.toggle('dark')}
          >
            🌓 Toggle Dark Mode
          </button>
        </div>

        {deletedBook && (
          <div className="recovery-banner">
            <span>
              📕 <strong>{deletedBook.title}</strong> was deleted.
            </span>
            <button onClick={handleRecover} className="recover-btn">
              ♻️ Recover Book
            </button>
          </div>
        )}

        <div className="filters">
          <SearchBar value={search} onChange={setSearch} />
          <GenreFilter genres={genres} selectedGenre={genre} onChange={setGenre} />
          <Link className="add-btn" to="/books/new">
            ➕ Add Book
          </Link>
        </div>

        <div className="book-grid">
          {filtered.map((book) => (
            <div key={book.id} className="book-card">
              <h3>{book.title}</h3>
              <p><strong>Author:</strong> {book.author}</p>
              <p><strong>Genre:</strong> {book.genre}</p>
              <p><strong>Year:</strong> {book.year}</p>
              <p><strong>Price:</strong> {book.price || '$0.00'}</p>
              <div className="actions">
                <Link to={`/books/${book.id}`} className="view">View</Link>
                <Link to={`/books/edit/${book.id}`} className="edit">Edit</Link>
                <button className="delete" onClick={() => handleDelete(book.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BookListPage;
