import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

function Contact() {
  return (
    <Container id="contact" className="my-5">
      <h2>Contact Us</h2>
      <Form>
        <Form.Group controlId="contactName" className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Your Name" />
        </Form.Group>
        <Form.Group controlId="contactEmail" className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Your Email" />
        </Form.Group>
        <Form.Group controlId="contactMessage" className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="How can we help you?" />
        </Form.Group>
        <Button variant="success" type="submit">
          Submit
        </Button>
      </Form>
      <div className="mt-3">
        <strong>Phone:</strong> +91 8286535357 / 8879006727<br />
        <strong>Email:</strong> greenheartinteriors@yahoo.com
      </div>
    </Container>
  );
}
export default Contact;
