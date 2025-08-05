import React from 'react';
import { Container, Button } from 'react-bootstrap';

function Hero() {
  return (
    <div className="bg-success text-white text-center py-5">
      <Container>
        <h1>Green Heart Infraprojects</h1>
        <p>Your trusted partner for quality, sustainable construction & interiors</p>
        <Button variant="light" href="#contact">Get in Touch</Button>
      </Container>
    </div>
  );
}
export default Hero;
