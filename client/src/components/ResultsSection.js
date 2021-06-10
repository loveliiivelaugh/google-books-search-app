import React from 'react';
//bootstrap
import {  
  Button, Card, CardBody, CardTitle, Container, 
  Col, Row, CardText, CardSubtitle
} from 'reactstrap';
//router
import { Link } from 'react-router-dom';

const ResultsSection = ({ cardTitle, booksData, handleSaveBtn }) => {
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
                    {/* <CardText><small>Written By: {volumeInfo?.authors[0]}</small></CardText> */}
                  </Col>
                  <Col md={6}>
                    <Link to={volumeInfo.previewLink ? volumeInfo.previewLink : '/'}><Button>View</Button></Link>
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
