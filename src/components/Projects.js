import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap'
const projects = [
  { title: "Residential Villa", image: "/GreenHeart/project.png", desc: "Turnkey interiors for a villa." },
  { title: "Commercial Office", image: "/GreenHeart/project2.png", desc: "Corporate workspace design & build." },
];

function Projects() {
  return (
    <Container id="projects" className="my-5">
      <h2>Projects</h2>
      <Row>
        {projects.map((proj, i) => (
          <Col md={6} className="mb-4" key={i}>
            <Card>
              <Card.Img variant="top" src={proj.image} alt={proj.title} />
              <Card.Body>
                <Card.Title>{proj.title}</Card.Title>
                <Card.Text>{proj.desc}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
export default Projects;
