// src/App.js
import React, { useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import BookListPage from './pages/BookListPage';
import AddBookPage from './pages/AddBookPage';
import BookDetailPage from './pages/BookDetailPage';
import EditBookPage from './pages/EditBookPage';
import LoginPage from './pages/LoginPage';
import { useDispatch } from 'react-redux';
import { fetchBooks } from './redux/actions/bookActions';
import './styles/main.css';

const PrivateRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
  return isLoggedIn ? children : <Navigate to="/" />;
};

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} /> {/* ✅ No Navbar here */}
      <Route path="/books" element={<PrivateRoute><BookListPage /></PrivateRoute>} />
      <Route path="/books/new" element={<PrivateRoute><AddBookPage /></PrivateRoute>} />
      <Route path="/books/:id" element={<PrivateRoute><BookDetailPage /></PrivateRoute>} />
      <Route path="/books/edit/:id" element={<PrivateRoute><EditBookPage /></PrivateRoute>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
