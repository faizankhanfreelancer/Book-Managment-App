export const FETCH_BOOKS = 'FETCH_BOOKS';
export const SET_BOOKS = 'SET_BOOKS';
export const ADD_BOOK = 'ADD_BOOK';
export const UPDATE_BOOK = 'UPDATE_BOOK';
export const DELETE_BOOK = 'DELETE_BOOK';

export const fetchBooks = () => ({ type: FETCH_BOOKS });
export const setBooks = (books) => ({ type: SET_BOOKS, payload: books });
export const addBook = (book) => ({ type: ADD_BOOK, payload: book });
export const updateBook = (book) => ({ type: UPDATE_BOOK, payload: book });
export const deleteBook = (id) => ({ type: DELETE_BOOK, payload: id });