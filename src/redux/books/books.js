import createBook, { APIURl, deleteBookfromApi } from '../../components/apiCalls';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOKS = 'bookStore/books/GET_BOOKS';
const initialState = [];

export const addBook = (payload) => async (dispatch) => {
  const { id, title, category } = payload;
  await createBook(id, title, category);
  dispatch({
    type: ADD_BOOK,
    payload: [id, [{ title, category }]],
  });
};

export const getAllBooks = () => async (dispatch) => {
  const response = await fetch(APIURl);
  const data = await response.json();
  const AllBooks = Object.entries(data);
  dispatch({
    type: GET_BOOKS,
    AllBooks,
  });
};

export const removeBook = (payload) => async (dispatch) => {
  await deleteBookfromApi(payload);
  dispatch({
    type: REMOVE_BOOK,
    payload,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book[0] !== action.payload);
    case GET_BOOKS:
      return action.AllBooks;
    default:
      return state;
  }
};

export default reducer;
