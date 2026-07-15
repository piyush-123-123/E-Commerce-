import { Button } from "react-bootstrap";
import { useContext } from "react";
import CartContext from "../Store/CartContext";
import CartItem from "./CartItem";
import "./Cart.css";
import {Row,Col} from "react-bootstrap"

const Cart = ({ onCloseCart }) => {
  const ctx = useContext(CartContext);

  const totalPrice = ctx.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="cart">
     < div className="d-flex justify-content-end">
    <Button
          variant="outline-danger"
          onClick={onCloseCart}
          
        >
          X
        </Button>
</div>
      
        <div className="cartheader">
       <h2>Cart</h2>
        </div>

     <Row className="fw-bold text-center pb-2">
  <Col xs={6}>
    <div className="heading-border">ITEM</div>
  </Col>

  <Col xs={2}>
    <div className="heading-border">PRICE</div>
  </Col>

  <Col xs={4}>
    <div className="heading-border">QUANTITY</div>
  </Col>
</Row>

     <div className="cart-body">
  {ctx.items.map((item) => (
    <CartItem
      key={item.title}
      item={item}
    />
  ))}
</div>

      <div className="d-flex justify-content-end align-items-center my-2" >
  <h4 className="me-3">Total</h4>
  <h4>${totalPrice.toFixed(2)}</h4>
</div>

      <div className="d-flex justify-content-center mt-5" >
        <Button variant="info">
          PURCHASE
        </Button>
      </div>
    </div>
  );
};

export default Cart;