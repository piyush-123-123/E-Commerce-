import Products from "../components/Products"
import productsArr from "../data/products";
const Store = () => {
 
  return (
    <Products products={productsArr}/>
  )
};

export default Store;