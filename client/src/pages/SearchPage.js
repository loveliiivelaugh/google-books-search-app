import React, { useState } from 'react';
import axios from 'axios';
import Api from '../api';
import { useRouter } from '../hooks/router.js';
//components
import HeroSection from '../components/HeroSection';
import ResultsSection from '../components/ResultsSection';
import SearchSection from '../components/SearchSection';

import { Container } from 'reactstrap';

const SearchPage = () => {
  const router = useRouter();
  const [booksData, setBooks] = useState([]);

  const fetchData = async (searchTerm) => {
    const booksData = await axios.get('/api/books/' + searchTerm);

    setBooks(booksData.data);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const searchTerm = await e.target.search.value;
    fetchData(searchTerm);
  };

  const handleViewBtn = ({ id, details })  => {
    router.push('/books/' + id, {
      state: details
    });
  };

  const handleSaveBtn = async book  => {
    const savedBook = await Api.saveBook(book);

    if (savedBook) {
      alert("You saved ", savedBook);
    }
  };

  console.log(booksData);

  return (
    <Container>
      <HeroSection 
        title="React Google Books Search"
        subtitle="Search for and Save Books of Interest"
      />
      <SearchSection
        title="Book Search"
        btnText="Search"
        handleSubmit={handleSubmit}
      />
      <ResultsSection
        cardTitle="Results"
        booksData={booksData}
        handleViewBtn={handleViewBtn}
        handleSaveBtn={handleSaveBtn}
      />
    </Container>
  )
}

export default SearchPage
