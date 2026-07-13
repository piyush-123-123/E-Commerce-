import { Container, Row, Col } from "react-bootstrap";
import ProductItem from "./ProductItem";

const Products = ({ products }) => {
  return (
    <Container>
      <Row>
        {products.map((product) => (
          <Col md={6}>
            <ProductItem product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;