import { Button, Image, Row, Col } from "react-bootstrap";
import { useContext } from "react";
import { useDispatch } from "react-redux";
import AuthContext from "../../store/AuthContext";
import {removeCartData} from "../../store/redux_store/cart-actions";

const CartItem = ({ item }) => {
  const authCtx = useContext(AuthContext);
  const dispatch = useDispatch();

  const userId = authCtx.email
    ? authCtx.email.replace(/[@.]/g, "")
    : "";

  const removeItemHandler = async () => {
    dispatch(removeCartData({ userId, item }));

  };

  return (
    <Row className="align-items-center py-3 border-bottom">
      <Col xs={6} className="d-flex align-items-center">
        <Image
          src={item.images[0]}
          rounded
          width={40}
          height={40}
        />
        <span className="ms-3">{item.title}</span>
      </Col>

      <Col xs={2}>${item.price}</Col>

      <Col xs={4} className="d-flex align-items-center gap-2">
        <span>{item.quantity}</span>

        <Button variant="danger" size="sm" onClick={removeItemHandler}>
          REMOVE
        </Button>
      </Col>
    </Row>
  );
};

export default CartItem;