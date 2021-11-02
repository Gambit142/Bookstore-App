import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook, removeBook } from '../redux/books/books';
// import store from '../redux/configureStore';

const BooksPage = (prop) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const { data } = prop;

  const submitBookToStore = (e) => {
    e.preventDefault();
    if (title === '' || author === '') return;
    const newBook = {
      id: uuidv4(),
      title,
      author,
    };
    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
  };

  const removeBookFromStore = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <>
      <div className="books-container d-flex">
        <div>
          {data.map((book) => (
            <div key={book.id}>
              {book.title}
              {book.author}
              <button type="button" onClick={() => removeBookFromStore(book.id)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
      <form onSubmit={submitBookToStore} className="form-container">
        <input
          type="text"
          name="title"
          id="title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          placeholder="Book Title"
        />
        <input
          type="text"
          name="author"
          id="author"
          onChange={(e) => setAuthor(e.target.value)}
          value={author}
          placeholder="Book Author"
        />
        <button type="submit">Add Books</button>
      </form>
    </>
  );
};

export default BooksPage;
