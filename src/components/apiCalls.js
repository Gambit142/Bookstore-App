const APIURl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/LWx5miYaJfjkFh9ASFAf/books';
const createId = async () => {
  const response = await fetch(APIURl, {
    method: 'POST',
  });
  const DATA = await response.text();
  console.log(DATA);
  return DATA;
};

export default createId;
