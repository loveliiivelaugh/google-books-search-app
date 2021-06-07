import React from 'react';
//bootstrap
import {  
  Button, Card, CardBody, CardTitle, Container, 
  Col, Row, CardText, CardSubtitle
} from 'reactstrap';

const ResultsSection = ({ cardTitle, booksData, handleViewBtn, handleSaveBtn }) => {
  return (
    <>
      {booksData.length > 0 && 
        <Card className="p-3">
          <CardTitle tag="h5">{cardTitle}</CardTitle>
          <CardBody>
            {booksData && booksData.map(({ id, volumeInfo }) => (
              <Card className="p-2" key={id}>
                <Row className="m-3">
                  <Col md={6}>
                    <CardTitle tag="h5">{volumeInfo.title}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">{volumeInfo.subtitle}</CardSubtitle>
                    <CardText><small>Written By: {volumeInfo.authors[0]}</small></CardText>
                  </Col>
                  <Col md={6}>
                    <Button onClick={() => handleViewBtn({ id: id, details: volumeInfo })}>View</Button>
                    <Button onClick={() => handleSaveBtn({ id: id, details: volumeInfo })}>Save</Button>
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
    </>
  )
}

export default ResultsSection
