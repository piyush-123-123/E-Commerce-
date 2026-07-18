import { Card, Button } from "react-bootstrap";
import CartContext from "./store/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "./store/AuthContext";
import API_URL from "../API";

const ProductItem = ({ product }) => {
  const ctx = useContext(CartContext);
  const authCtx = useContext(AuthContext);

  const userId = authCtx.email
    ? authCtx.email.replace(/[@.]/g, "")
    : "";

const addToCartHandler = async () => {
  try {
    // Get current cart
    const response = await fetch(`${API_URL}/cart${userId}`);
    const cartItems = await response.json();

    // Check if product already exists
    const existingItem = cartItems.find(
      (item) => item.id === product.id
    );

    if (existingItem) {
      const { _id, ...updatedItem } = existingItem;

      // Update quantity
      await fetch(`${API_URL}/cart${userId}/${_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...updatedItem,
          quantity: existingItem.quantity + 1,
        }),
      });
    } else {
      // Add new item
      await fetch(`${API_URL}/cart${userId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...product,
          quantity: 1,
        }),
      });
    }

    // Fetch updated cart and update Context
    const updatedResponse = await fetch(`${API_URL}/cart${userId}`);
    const updatedCart = await updatedResponse.json();

    ctx.setItems(updatedCart);
  } catch (err) {
    console.log(err);
  }
};

  return (
    <Card
      className="border-0 shadow-none"
      style={{ width: "15rem" }}
    >
      <Card.Title className="d-flex justify-content-center mb-3">
        <Link
          to={`/product/${product.id}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          {product.title}
        </Link>
      </Card.Title>

      <Link to={`/product/${product.id}`}>
        <Card.Img
          src={product.images[0]}
          style={{ height: "220px", objectFit: "cover" }}
        />
      </Link>

      <Card.Body className="d-flex justify-content-between align-items-end">
        <div className="fw-bold">${product.price}</div>

        <Button variant="outline-success" onClick={addToCartHandler}>
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductItem;