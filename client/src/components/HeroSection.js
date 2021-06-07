import React from 'react';

import { Container, Jumbotron } from 'reactstrap';

const HeroSection = ({ title, subtitle }) => {
  return (
    <>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">{title}</h1>
          <p className="lead">{subtitle}</p>
        </Container>
      </Jumbotron>
    </>
  )
}

export default HeroSection
