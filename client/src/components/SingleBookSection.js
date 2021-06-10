import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardLink, Col, Row } from 'reactstrap';

const SingleBookSection = ({ book }) => {
  return (
    <Row>
      <Col sm={6} md={6}>
        <img width="100%" src={book.imageLinks.thumbnail} alt={book.title} />
      </Col>
      <Col sm={6} md={6}>
        <Card>
          <CardBody>
            <CardTitle tag="h5">{book.title}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">{book.subtitle}</CardSubtitle>
          </CardBody>
          <CardBody>
            <CardText>{book.description}</CardText>
            <CardLink href={book.infoLink}>More Info</CardLink>
            <CardLink href={book.previewLink}>Preview</CardLink>
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}

export default SingleBookSection
