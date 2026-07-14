import { Container, Row, Col, Image } from "react-bootstrap";

const About = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">About</h2>

      <Row className="align-items-center">
        <Col md={4} className="text-center">
          <Image
            src="https://prasadyash2411.github.io/ecom-website/img/Band%20Members.png"
            roundedCircle
            fluid
          />
        </Col>

        <Col md={8}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
            recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Cumque, molestiae. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Adipisci, accusantium.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            aspernatur consequatur, quia quos iste pariatur eveniet sint
            necessitatibus.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;