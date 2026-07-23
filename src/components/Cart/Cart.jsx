import { Button } from "react-bootstrap";
import { useContext ,useEffect} from "react";
import CartContext from "../store/CartContext";
import CartItem from "./CartItem";
import {Row,Col} from "react-bootstrap";
import AuthContext from "../store/AuthContext";
import API_URL from "../../API";
import "./Cart.css";


const Cart = ({ onCloseCart }) => {
  const ctx = useContext(CartContext);
  const authCtx = useContext(AuthContext);

 const userId = authCtx.email
  ? authCtx.email.replace(/[@.]/g, "")
  : "";

  useEffect(() => {
  const fetchCartItems = async () => {
    try{
    const response = await fetch(`${API_URL}/cart${userId}`);
    const data = await response.json();

   ctx.setItems(data);
  }
  catch(err){
    console.log(err);
  }
  }

  if (userId) {
    fetchCartItems();
  }
}, [userId]);

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
      key={item._id}
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