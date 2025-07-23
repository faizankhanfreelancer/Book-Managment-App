// src/redux/sagas/bookSaga.js

import { takeEvery, put, select } from 'redux-saga/effects';
import {
  FETCH_BOOKS,
  ADD_BOOK,
  UPDATE_BOOK,
  DELETE_BOOK,
  setBooks,
} from '../actions/bookActions';

// ✅ FORMATTED DEMO BOOKS INCLUDED HERE
function* fetchBooksSaga() {
  let books = JSON.parse(localStorage.getItem("books") || "[]");

  if (books.length === 0) {
    books = [
      { id: "1", title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classic", year: "1925", price: "$25.00" },
      { id: "2", title: "The War of 1984 Battle", author: "George Orwell", genre: "Dystopian", year: "1949", price: "$18.75" },
      { id: "3", title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Classic", year: "1960", price: "$22.50" },
      { id: "4", title: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy", year: "1937", price: "$32.30" },
      { id: "5", title: "Harry Potter", author: "J.K. Rowling", genre: "Fantasy", year: "1997", price: "$29.99" },
      { id: "6", title: "Pride and Prejudice", author: "Jane Austen", genre: "Romance", year: "1813", price: "$20.00" },
      { id: "7", title: "The Catcher in the Rye", author: "J.D. Salinger", genre: "Classic", year: "1951", price: "$24.50" },
      { id: "8", title: "The Da Vinci Code", author: "Dan Brown", genre: "Thriller", year: "2003", price: "$27.25" },
      { id: "9", title: "The Alchemist", author: "Paulo Coelho", genre: "Adventure", year: "1988", price: "$19.95" },
      { id: "10", title: "Sapiens", author: "Yuval Noah Harari", genre: "Non-Fiction", year: "2011", price: "$34.00" },
      { id: "11", title: "Steve Jobs", author: "Walter Isaacson", genre: "Biography", year: "2011", price: "$28.75" },
      { id: "12", title: "The Shining", author: "Stephen King", genre: "Horror", year: "1977", price: "$26.10" }
    ];

    localStorage.setItem("books", JSON.stringify(books));
  }

  yield put(setBooks(books));
}


function* addBookSaga(action) {
  const books = yield select((state) => state.books);
  const newBook = { ...action.payload, id: Date.now().toString() };
  const updated = [...books, newBook];
  yield put(setBooks(updated));
  localStorage.setItem("books", JSON.stringify(updated));
}

function* updateBookSaga(action) {
  const books = yield select((state) => state.books);
  const updated = books.map((b) =>
    b.id === action.payload.id ? action.payload : b
  );
  yield put(setBooks(updated));
  localStorage.setItem("books", JSON.stringify(updated));
}

function* deleteBookSaga(action) {
  const books = yield select((state) => state.books);
  const updated = books.filter((b) => b.id !== action.payload);
  yield put(setBooks(updated));
  localStorage.setItem("books", JSON.stringify(updated));
}


export default function* bookSaga() {
  yield takeEvery(FETCH_BOOKS, fetchBooksSaga);
  yield takeEvery(ADD_BOOK, addBookSaga);
  yield takeEvery(UPDATE_BOOK, updateBookSaga);
  yield takeEvery(DELETE_BOOK, deleteBookSaga);
}
