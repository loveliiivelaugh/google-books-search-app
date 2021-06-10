import React, { useEffect, useState } from 'react';
import HeroSection from '../components/HeroSection';
import SavedResultsSection from '../components/SavedResultsSection';
import Api from '../api';

const SavedPage = () => {
  const [savedBooks, setSavedBooks] = useState([]);

  const fetchSavedBooks = async () => {
    const books = await Api.getSavedBooks();
    console.log(books);
    setSavedBooks(books.data);
  };

  useEffect(() => {
    fetchSavedBooks();
  }, []);

  const handleDeleteBtn = async book => {
    const deletedBook = await Api.deleteSavedBook(book);
    console.info(deletedBook);

    fetchSavedBooks();
  };

  console.log(savedBooks);
  
  return (
    <>
      <HeroSection 
        title="React Google Books Search"
        subtitle="Search for and Save Books of Interest"
      />
      <SavedResultsSection
        cardTitle="Saved Books"
        booksData={savedBooks}
        handleDeleteBtn={handleDeleteBtn}
      />
    </>
  )
}

export default SavedPage
