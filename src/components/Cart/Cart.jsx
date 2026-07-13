import { Button, Row, Col } from "react-bootstrap";
import "./Cart.css";

const Cart = ({ onCloseCart }) => {
  const cartElements = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      quantity: 2,
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      quantity: 3,
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      quantity: 1,
    },
  ];

  return (
    <div className="cart">
      <div className="cart-header">
        <h2>CART</h2>

        <Button
          variant="outline-danger"
          className="close-btn"
          onClick={onCloseCart}
        >
          X
        </Button>
      </div>

      <Row className="fw-bold text-center border-bottom pb-2 mb-3">
        <Col xs={6}>ITEM</Col>
        <Col xs={3}>PRICE</Col>
        <Col xs={3}>QUANTITY</Col>
      </Row>

      {cartElements.map((item) => (
        <Row
          key={item.title}
          className="align-items-center border-bottom py-3"
        >
          <Col xs={6} className="d-flex align-items-center">
            <img
              src={item.imageUrl}
              alt={item.title}
              width="60"
              height="60"
            />

            <span className="ms-3">{item.title}</span>
          </Col>

          <Col xs={3}>${item.price}</Col>

          <Col xs={3}>
            {item.quantity}

            <Button
              variant="danger"
              size="sm"
              className="ms-2"
            >
              REMOVE
            </Button>
          </Col>
        </Row>
      ))}

      <div className="d-flex justify-content-end mt-4">
        <h5>Total $220</h5>
      </div>

      <div className="text-center mt-4">
        <Button variant="info">
          PURCHASE
        </Button>
      </div>
    </div>
  );
};

export default Cart;