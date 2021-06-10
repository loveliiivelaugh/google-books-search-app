import axios from "axios";

const Api = {
  saveBook: async (book) => {
    console.log(book);
    return await axios.post('/api/library', book)
      .then(response => response)
      .catch(error => console.error(error));
  },
  getSavedBooks: async () => {
    console.log("getSavedBooks()")
    return await axios.get('/api/library')
      .then(response => response)
      .catch(error => console.error(error));
  },
  deleteSavedBook: async (book) => {
    console.log(book);
    return await axios.delete('/api/library/' + book._id)
      .then(response => response)
      .catch(error => console.error(error));
  },
  fetchData: async (searchTerm) => {
    return await axios.get('/api/books/' + searchTerm)
      .then(response => response)
      .catch(error => console.error(error));
  },
};

export default Api;