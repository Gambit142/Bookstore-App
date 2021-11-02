import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook, removeBook } from './redux/books/books';

const dispatch = useDispatch();

const BooksPage = () => {
  const submitBookToStore = () => {
    const newBook = {
      id: uuidv4(),
      title,
      author,
    };

    // dispatch an action and pass it the newBook object (your action's payload)
    dispatch(addBook(newBook));
  };
  return (
    <>
      <div className="books-container d-flex">
        <button type="button">Delete</button>
      </div>
      <input type="text" name="addBooks" placeholder="Book Title" />
      <button type="button">Add Books</button>
    </>
  );
};

export default BooksPage;
