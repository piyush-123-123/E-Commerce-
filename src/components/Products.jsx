import { Container, Row, Col } from "react-bootstrap";
import ProductItem from "./ProductItem";

const Products = ({ products }) => {
  return (
<Container className="py-5">
  <Row className="justify-content-center">
    {products.map((product) => (
      <Col
        key={product.id}
        md={5}
        lg={5}
        xl={5}
        className="d-flex justify-content-center mb-5"
      >
        <ProductItem product={product} />
      </Col>
    ))}
  </Row>
</Container>
  );
};

export default Products;