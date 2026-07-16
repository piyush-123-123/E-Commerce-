import {Card,Button} from "react-bootstrap";
import CartContext from "./store/CartContext"
import {useContext} from "react";
import {Link } from "react-router-dom"
const ProductItem=({product})=>{
const ctx=useContext(CartContext);
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
         
            <Card.Body  className="d-flex justify-content-between align-items-end">
                <div className="d-flex fw-bold"> ${product.price}</div>
               
                <Button variant="outline-success" onClick={ () => ctx.addItem(product)}>Add to Cart</Button>
                </Card.Body>
               
               

            </Card>
    )

}
export default ProductItem;
