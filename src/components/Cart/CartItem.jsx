import { Button,Image } from "react-bootstrap";
import "./CartItem.css";
import {Row,Col} from "react-bootstrap"
const CartItem = ({ item }) => {
  return (
   <Row className="align-items-center py-3 border-bottom">
  <Col xs={6} className="d-flex align-items-center">
        <Image
          src={item.imageUrl}
          rounded
          width={40}
          height={40}
        />

        <span className="ms-3">{item.title}</span>

        </Col>

  <Col xs={2}>
    ${item.price}
  </Col>

  <Col xs={4} className="d-flex align-items-center gap-2">
  <span>{item.quantity}</span>

  <Button variant="danger" size="sm">
    REMOVE
  </Button>
</Col>
</Row>
  );
};

export default CartItem;