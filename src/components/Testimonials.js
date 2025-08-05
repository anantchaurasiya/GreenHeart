import React from 'react';
import { Container, Carousel } from 'react-bootstrap';

const testimonials = [
  { quote: "Excellent work delivered on time!", client: "ABC Industries" },
  { quote: "Professional, reliable and creative.", client: "Residential Client" },
];

function Testimonials() {
  return (
    <Container id="testimonials" className="my-5">
      <h2>Testimonials</h2>
      <Carousel>
        {testimonials.map((t, i) => (
          <Carousel.Item key={i}>
            <blockquote className="blockquote text-center">
              <p className="mb-4">{t.quote}</p>
              <footer className="blockquote-footer">{t.client}</footer>
            </blockquote>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}
export default Testimonials;
