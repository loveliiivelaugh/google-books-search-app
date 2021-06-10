import React, { useState } from 'react';
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

  const handleSubmit = async e => {
    e.preventDefault();

    let searchTerm = await e.target.search.value;
    const booksData = await Api.fetchData(searchTerm);

    console.log(booksData);

    setBooks(booksData.data);

    searchTerm = '';
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
        handleSaveBtn={handleSaveBtn}
      />
    </Container>
  )
}

export default SearchPage
