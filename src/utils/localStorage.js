// src/utils/localStorage.js

const STORAGE_KEY = 'books';

/**
 * Get books from localStorage
 * @returns {Array} - An array of book objects
 */
export const loadBooksFromStorage = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Failed to load books from localStorage', error);
    return [];
  }
};

/**
 * Save books array to localStorage
 * @param {Array} books - The array of book objects to save
 */
export const saveBooksToStorage = (books) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
  } catch (error) {
    console.error('Failed to save books to localStorage', error);
  }
};
