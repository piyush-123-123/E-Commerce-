import { useParams } from "react-router-dom";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import productsArr from "../data/products";

const ProductDetails = () => {
  const { productId } = useParams();

  const product = productsArr.find(
    (item) => item.id === productId
  );

  if (!product) {
    return <h2 className="text-center mt-5">Product Not Found</h2>;
  }

  return (
    <Container className="my-5">
      <Row>
        <Col md={6}>
          <Card className="border-0">
            <Card.Img
              variant="top"
              src={product.images[0]}
              style={{ height: "400px", objectFit: "cover" }}
            />
          </Card>

          <div className="d-flex justify-content-center gap-3 mt-3">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={product.title}
                style={{
                  width: "90px",
                  height: "90px",
                  objectFit: "cover",
                  border: "1px solid #ccc",
                  cursor: "pointer",
                }}
              />
            ))}
          </div>
        </Col>


        <Col md={6}>
          <h2>{product.title}</h2>

          <h4 className="text-success mt-3">
            ${product.price}
          </h4>

          <hr />

          <h4>Reviews</h4>

          <ListGroup>
            {product.reviews.map((review, index) => (
              <ListGroup.Item key={index}>
                ⭐ {review}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;