import {Card,Button} from "react-bootstrap";
const ProductItem=({product})=>{

    return (
        <Card>
            <Card.Title>
             {product.title}
            </Card.Title>
            <Card.Img 
            src= {product.imageUrl} 
            style={{ height: "250px", objectFit: "cover" }}
            />
            <Card.Body  className="d-flex justify-content-between align-items-center">
                ${product.price}
                <Button>Add to Cart</Button>
                </Card.Body>
               
               
        

            </Card>
    )

}
export default ProductItem;
