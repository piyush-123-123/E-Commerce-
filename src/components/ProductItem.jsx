import { Card, Button } from "react-bootstrap";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import AuthContext from "../store/AuthContext";
import  {sendCartData} from "../store/redux_store/cart-actions";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const authCtx = useContext(AuthContext);

  const userId = authCtx.email
    ? authCtx.email.replace(/[@.]/g, "")
    : "";

  const addToCartHandler = async () => {
    dispatch(sendCartData({ userId, product }));

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