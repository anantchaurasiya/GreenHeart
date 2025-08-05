import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const services = [
  { title: "Civil + Interior", desc: "Complete civil and interior finishes: carpentry, painting, gypsum, etc." },
  { title: "MEP Services", desc: "Electrical, networking, plumbing, and fabrication works." },
  { title: "Fire & Security", desc: "LV systems: fire detection/alarm, PA, security systems." },
  { title: "HVAC", desc: "Heating, ventilation, and air conditioning solutions." },
  { title: "Design & Build", desc: "Single-team responsibility from planning to hand-over." },
];

function Services() {
  return (
    <Container id="services" className="my-5">
      <h2>Our Services</h2>
      <Row>
        {services.map((service, i) => (
          <Col md={4} className="mb-4" key={i}>
            <Card>
              <Card.Body>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.desc}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
export default Services;
