import {Card,Button} from "react-bootstrap";
import CartContext from "../components/Store/CartContext"
import {useContext} from "react";
const ProductItem=({product})=>{
const ctx=useContext(CartContext);
    return (
        <Card py="10" px="10">
            <Card.Title>
             {product.title}
            </Card.Title>
            <Card.Img 
            src= {product.imageUrl} 
            style={{ height: "250px", objectFit: "cover" }}
            />
            <Card.Body  className="d-flex justify-content-between align-items-center">
                ${product.price}
                <Button onClick={ () => ctx.addItem(product) }>Add to Cart</Button>
                </Card.Body>
               
               
        

            </Card>
    )

}
export default ProductItem;
