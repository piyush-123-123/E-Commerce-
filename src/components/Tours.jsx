import { Container, Row, Col, Button } from "react-bootstrap";

const tours = [
  {
    date: "JUL 16",
    city: "DETROIT, MI",
    venue: "DTE ENERGY MUSIC THEATRE",
  },
  {
    date: "JUL 19",
    city: "TORONTO, ON",
    venue: "BUDWEISER STAGE",
  },
  {
    date: "JUL 22",
    city: "BRISTOW, VA",
    venue: "JIGGY LUBE LIVE",
  },
  {
    date: "JUL 29",
    city: "PHOENIX, AZ",
    venue: "AK-CHIN PAVILION",
  },
  {
    date: "AUG 2",
    city: "LAS VEGAS, NV",
    venue: "T-MOBILE ARENA",
  },
  {
    date: "AUG 7",
    city: "CONCORD, CA",
    venue: "CONCORD PAVILION",
  },
];

const Tours = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-5">TOURS</h2>

      {tours.map((tour, index) => (
        <Row
          key={index}
          className="align-items-center border-bottom py-3"
        >
          <Col md={2}>
            <strong>{tour.date}</strong>
          </Col>

          <Col md={3}>{tour.city}</Col>

          <Col md={5}>{tour.venue}</Col>

          <Col md={2}>
            <Button variant="info" className="text-white">
              BUY TICKETS
            </Button>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default Tours;