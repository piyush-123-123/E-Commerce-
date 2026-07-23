import { Card, Button } from "react-bootstrap";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {uiActions} from "../store/redux_store/uiSlice"
import AuthContext from "../store/AuthContext";
import { cartActions } from "../store/redux_store/cartSlice";
import API_URL from "../API";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const authCtx = useContext(AuthContext);

  const userId = authCtx.email
    ? authCtx.email.replace(/[@.]/g, "")
    : "";

  const addToCartHandler = async () => {
    try {
      dispatch(uiActions.showNotification({
            status: "pending",
            title: "Sending...",
            message: "Sending cart data!"
      }))
      const response = await fetch(`${API_URL}/cart${userId}`);
      const cartItems = await response.json();
      const existingItem = cartItems.find(
        (item) => item.id === product.id
      );
      if (existingItem) {
        const { _id, ...updatedItem } = existingItem;
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
      const updatedResponse = await fetch(`${API_URL}/cart${userId}`);
      const updatedCart = await updatedResponse.json();
      dispatch(cartActions.setItems(updatedCart));
      console.log("Success dispatch");
      dispatch(
     uiActions.showNotification({
       status: "success",
        title: "Success!",
       message: "Item added to cart successfully."
      })
      
     );
       setTimeout(() => {
      dispatch(uiActions.hideNotification()); 
    }, 2000);
    } catch (err) {
      dispatch(
     uiActions.showNotification({
       status: "error",
    title: "Error!",
    message: "Sending request failed."
  })
);
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