import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllBooks } from '../redux/books/books';
import AddBook from './Addbook';
import IndividualBook from './booklist';

const BooksPage = () => {
  const dispatch = useDispatch();
  const { booksReducer } = useSelector((state) => state);
  useEffect(() => {
    dispatch(getAllBooks());
  }, []);

  return (
    <>
      {booksReducer.map((item) => <IndividualBook key={item[0]} data={item} />)}
      <AddBook />
    </>
  );
};

export default BooksPage;
