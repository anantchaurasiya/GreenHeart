import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

function MainNavbar() {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <img src="./images/logo.png" alt="Logo" width="30" height="30" className="d-inline-block align-top" />
        <Navbar.Brand href="#">Green Heart</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#testimonials">Testimonials</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default MainNavbar;
