import React from 'react';
import { Container } from 'reactstrap';
import HeroSection from '../components/HeroSection.js';
import SingleBookSection from '../components/SingleBookSection.js';
import { useRouter } from '../hooks/router.js';

const SingleBookPage = (props) => {
  const router = useRouter();
  const book = router.location.state.state;
  console.log(book);

  return (
    <Container>
      <HeroSection 
        title="Single Book Page"
        subtitle="All the books you love." 
      />
      <SingleBookSection book={book} />
    </Container>
  )
}

export default SingleBookPage
