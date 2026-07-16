import {Card,Button} from "react-bootstrap";
import CartContext from "../components/Store/CartContext"
import {useContext} from "react";
const ProductItem=({product})=>{
const ctx=useContext(CartContext);
    return (
        <Card
  className="border-0 shadow-none"
  style={{ width: "15rem" }}
>
            <Card.Title className="d-flex ">
             {product.title}
            </Card.Title>
            <Card.Img 
            src= {product.imageUrl} 
            style={{ height: "220px", objectFit: "cover" }}
            />
            <Card.Body  className="d-flex justify-content-between align-items-end">
                <div className="d-flex fw-bold"> ${product.price}</div>
               
                <Button variant="outline-success" onClick={ () => ctx.addItem(product)}>Add to Cart</Button>
                </Card.Body>
               
               
        

            </Card>
    )

}
export default ProductItem;
