import { Button, Image, Row, Col } from "react-bootstrap";

import API_URL from "../../API";
import AuthContext from "../store/AuthContext";
import CartContext from "../store/CartContext";
import { useContext } from "react";

const CartItem = ({ item }) => {
  const authCtx = useContext(AuthContext);
  const cartCtx = useContext(CartContext);

  const userId = authCtx.email
    ? authCtx.email.replace(/[@.]/g, "")
    : "";

  const removeItemHandler = async () => {
    try {
      const response = await fetch(
        `${API_URL}/cart${userId}/${item._id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete item");
      }

      cartCtx.removeItem(item._id);
    } catch (err) {
      console.log(err);
    }
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