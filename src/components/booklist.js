import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const IndividualBook = (prop) => {
  const { data } = prop;
  const [id, [{ title, category }]] = data;
  const dispatch = useDispatch();
  const removeBookFromStore = () => {
    dispatch(removeBook(id));
  };
  return (
    <>
      <div>
        {title}
        {category}
      </div>
      <button type="submit" onClick={removeBookFromStore}>Delete</button>
    </>
  );
};

export default IndividualBook;
