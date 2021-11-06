import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const randomAuthors = ['Toni Morrison', 'Charles Dickens',
  'Mark Twain', 'J.K Rawlings',
  'William Shakespeare', 'Dan Brown',
  'Virginia Woolfe', 'Suzanne Collins', 'Frank Herbert',
  'Wole Soyinka',
];

const Chapters = ['Chapter 4: The Getaway', 'Introduction', 'Chapter 9: A lesson Learned', 'Chapter 2: The Dropoff'];

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const submitBookToStore = (e) => {
    e.preventDefault();
    if (title === '' || category === 'default') return;
    const newBook = {
      id: uuidv4(),
      title,
      category,
      author: randomAuthors[Math.floor(Math.random() * randomAuthors.length)],
      percentage: Math.round(Math.random() * 100),
      chapters: Chapters[Math.floor(Math.random() * Chapters.length)],
    };
    dispatch(addBook(newBook));
    setTitle('');
    setCategory('default');
  };

  return (
    <form onSubmit={submitBookToStore} className="form-container d-flex">
      <hr />
      <h2> ADD NEW BOOK </h2>
      <div className="form-inputs d-flex">
        <label htmlFor="title">
          <input
            type="text"
            name="title"
            id="title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            placeholder="Book Title"
          />
        </label>
        <select onChange={(e) => setCategory(e.target.value)} value={category} name="categories" id="books-categories">
          <option value="default">Category</option>
          <option value="Action">Action</option>
          <option value="Comic">Comic</option>
          <option value="Romantic">Romantic</option>
          <option value="Literary Fiction">Literary Fiction</option>
          <option value="Historical Fiction">Historical Fiction</option>
          <option value="Detective and Mystery">Detective and Mystery</option>
        </select>
        <button className="submit-btn" type="submit">ADD BOOKS</button>
      </div>
    </form>
  );
};

export default AddBook;
