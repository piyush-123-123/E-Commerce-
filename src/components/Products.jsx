import { Container, Row, Col } from "react-bootstrap";
import ProductItem from "./ProductItem";

const Products = ({ products }) => {
  return (
    <Container>
      <Row >
        {products.map((product) => (
          <Col key={Math.random().toString()} md={6} className="d-flex justify-content-center my-3 ml-4">
            <ProductItem product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;