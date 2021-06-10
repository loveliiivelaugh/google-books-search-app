import React from 'react';
//bootstrap
import {  
  Button, Card, CardBody, CardTitle, Container, 
  Col, Row, CardText, CardSubtitle
} from 'reactstrap';
//router
import { Link } from 'react-router-dom';

const SavedResultsSection = ({ cardTitle, booksData, handleDeleteBtn }) => {
  return (
    <>
      {booksData.length > 0 && 
        <Card className="p-3">
          <CardTitle tag="h5">{cardTitle}</CardTitle>
          <CardBody>
            {booksData && booksData.map(({ authors, description, image, link, title, subtitle, _id }) => (
              <Card className="p-2" key={_id}>
                <Row className="m-3">
                  <Col md={6}>
                    <CardTitle tag="h5">{title}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">{subtitle}</CardSubtitle>
                    <CardText><small>Written By: {authors[0]}</small></CardText>
                  </Col>
                  <Col md={6}>
                    <Link to={link ? link : '/'}><Button>View</Button></Link>
                    <Button onClick={() => handleDeleteBtn({ authors, description, image, link, title, _id })}>Delete</Button>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Container>
                      <img src={image} alt={title} />
                    </Container>
                  </Col>
                  <Col>
                  <CardText>{description}</CardText>
                  </Col>
                </Row>
              </Card>
            ))}
          </CardBody>
        </Card>
      }
    </>
  )
}

export default SavedResultsSection
