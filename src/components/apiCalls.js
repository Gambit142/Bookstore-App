export const APIURl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/LWx5miYaJfjkFh9ASFAf/books';

const createBook = async (id, titleName, categoryName) => {
  const response = await fetch(APIURl, {
    method: 'POST',
    body: JSON.stringify({ item_id: id, title: titleName, category: categoryName }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const DATA = await response.text();
  return DATA;
};

export const deleteBookfromApi = async (id) => {
  const response = await fetch(`${APIURl}/${id}`, {
    method: 'DELETE',
    body: JSON.stringify({ item_id: id }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const DATA = await response.text();
  return DATA;
};

export default createBook;
