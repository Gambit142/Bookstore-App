import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { removeBook } from '../redux/books/books';

const IndividualBook = (prop) => {
  const { data } = prop;
  const [id, [{
    title,
    category,
    author,
    percentage,
    chapters,
  }]] = data;
  const dispatch = useDispatch();
  const removeBookFromStore = () => {
    dispatch(removeBook(id));
  };

  return (
    <>
      <div className="books-container d-flex">
        <div className="book-item d-flex">
          <span className="category">{category}</span>
          <span className="title">{title}</span>
          <span className="author">{author}</span>
          <button className="remove-btn" type="submit" onClick={removeBookFromStore}>Remove</button>
        </div>
        <div className="percentage-completed d-flex">
          <div className="progress-bar-div">
            <CircularProgressbar value={percentage} />
          </div>
          <div className="percent d-flex">
            <span className="number">
              {percentage}
              %
            </span>
            <span className="completed">Completed</span>
          </div>
          <div className="update-progress-div d-flex">
            <span className="current-chapter">Current Chapter</span>
            <span className="particular-chapter">{chapters}</span>
            <span className="text">Update Progress</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndividualBook;
