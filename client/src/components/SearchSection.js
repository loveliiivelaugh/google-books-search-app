import React from 'react';
//bootstrap
import {  
  Button, Card, CardBody, CardTitle, 
  Form, FormGroup, Label, Input,
} from 'reactstrap';

const SearchSection = ({ title, btnText, handleSubmit }) => {
  return (
    <>
      <Card className="p-3">
        <CardTitle tag="h5">{title}</CardTitle>
        <CardBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="search">Book</Label>
              <Input type="text" name="search" id="search" placeholder="Search for a book..." />
            </FormGroup>
            <FormGroup>
              <Button type="submit">{btnText}</Button>
            </FormGroup>
          </Form>
        </CardBody>
      </Card>
    </>
  )
}

export default SearchSection
