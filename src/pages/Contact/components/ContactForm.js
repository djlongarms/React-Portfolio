import React from 'react'
import { Col, Row, FormGroup, Label, Input, Button } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactForm = () => {
  return (
    <FormGroup>
      <Row>
        <Col>
          <Label class='form-label'>Name</Label>
          <Input type="text" name="user_name" />
          <Label class='form-label'>Email</Label>
          <Input type="email" name="user_email" />
          <Label class='form-label'>Contact Number</Label>
          <Input type="text" name="contact_number" />
        </Col>
        <Col>
          <Label class='form-label'>Message</Label>
          <Input type='textarea'/>
          <Button>Send</Button>
        </Col>
      </Row>
    </FormGroup>
  )
}

export default ContactForm