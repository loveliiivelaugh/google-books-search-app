import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {  
  Button, Card, CardBody, CardTitle, Container, 
  Form, FormGroup, Label, Input, FormText, Jumbotron, 
  Col, Row, CardText, CardSubtitle
} from 'reactstrap';


const SearchPage = () => {
  const [booksData, setBooks] = useState([]);

  const fetchData = async (searchTerm) => {
    const booksData = await axios.get('/api/books/' + searchTerm);

    console.log(booksData)
    setBooks(booksData.data);
  };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const handleSubmit = async e => {
    e.preventDefault();

    const searchTerm = await e.target.search.value;
    fetchData(searchTerm);
  };

  console.log(booksData);

  return (
    <Container>

    {/* HeroSection */}
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">React Google Books Search</h1>
          <p className="lead">Search for and Save Books of Interest</p>
        </Container>
      </Jumbotron>

    {/* SearchSection */}
      <Card className="p-3">
        <CardTitle tag="h5">Book Search</CardTitle>
        <CardBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="search">Book</Label>
              <Input type="text" name="search" id="search" placeholder="Search for a book..." />
            </FormGroup>
            <FormGroup>
              <Button type="submit">Search</Button>
            </FormGroup>
          </Form>
        </CardBody>
      </Card>

    {/* ResultsSection */}
    {booksData.length > 0 && 
      <Card className="p-3">
        <CardTitle tag="h5">Results</CardTitle>
        <CardBody>
          {booksData && booksData.map(({ volumeInfo }) => (
            <Card className="p-2">
              <Row className="m-3">
                <Col md={6}>
                  <CardTitle tag="h5">{volumeInfo.title}</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">{volumeInfo.subtitle}</CardSubtitle>
                  <CardText><small>Written By: {volumeInfo.authors[0]}</small></CardText>
                </Col>
                <Col md={6}>
                  <Button>View</Button>
                  <Button>Save</Button>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Container>
                    <img src={volumeInfo.imageLinks.smallThumbnail} alt={volumeInfo.title} />
                  </Container>
                </Col>
                <Col>
                <CardText>{volumeInfo.description}</CardText>
                </Col>
              </Row>
            </Card>
          ))}
        </CardBody>
      </Card>
    }

    </Container>
  )
}

export default SearchPage
