import axios from "axios";

const Api = {
  saveBook: async (book) => {
    return await axios.post('/api/books/' + book.id, book)
      .then(response => response)
      .catch(error => console.error(error));
  },
};

export default Api;