import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SearchPage = () => {
  const [booksData, setBooks] = useState([]);

  const fetchData = async (searchTerm) => {
    const booksData = await axios.get('/api/books/' + searchTerm);

    setBooks(booksData.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();

    const searchTerm = await e.target.search.value;
    fetchData(searchTerm);
  };

  console.log(booksData);
  
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="search" />
      <button type="submit">Search</button>
    </form>
  )
}

export default SearchPage
