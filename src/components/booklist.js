import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const IndividualBook = (prop) => {
  const { data } = prop;
  const [id, [{ title, category, author }]] = data;
  const dispatch = useDispatch();
  const removeBookFromStore = () => {
    dispatch(removeBook(id));
  };

  return (
    <>
      <div className="books-container">
        <div className="book-item d-flex">
          <span className="category">{category}</span>
          <span className="title">{title}</span>
          <span className="author">{author}</span>
          <button className="remove-btn" type="submit" onClick={removeBookFromStore}>Remove</button>
        </div>
      </div>
    </>
  );
};

export default IndividualBook;
