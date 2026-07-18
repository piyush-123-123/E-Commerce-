import { Container, Row, Col, Image } from "react-bootstrap";

const About = () => {
  return (
    <Container className="py-5">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold">About Us</h1>
        <p className="text-muted fs-5">
          Passionate about bringing music lovers the best merchandise.
        </p>
      </div>

      <Row className="align-items-center">
        <Col md={4} className="text-center mb-4 mb-md-0">
          <Image
            src="https://prasadyash2411.github.io/ecom-website/img/Band%20Members.png"
            roundedCircle
            fluid
            className="shadow-lg border border-4 border-light"
          />
        </Col>

        <Col md={8}>
          <h3 className="fw-bold mb-3">Our Story</h3>

          <p className="text-muted lh-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Doloribus, recusandae. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Cumque, molestiae. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Adipisci, accusantium.
          </p>

          <p className="text-muted lh-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Laboriosam aspernatur consequatur, quia quos iste pariatur
            eveniet sint necessitatibus. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quisquam, temporibus.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;