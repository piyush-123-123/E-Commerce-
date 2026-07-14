import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";
import {useState} from "react";
import Cart from "./components/Cart/Cart";
import CartProvider from "./components/Store/CartProvider" 
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";

const App=()=>{

const [showCart,setShowCart]=useState(false);
 const openCartHandler=()=>{
    setShowCart(true);
 }
  const closeCartHandler=()=>{
    setShowCart(false);
 }

  const productsArr = [
{
title: 'Colors',

price: 100,

imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

},

{

title: 'Black and white Colors',

price: 50,

imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

},

{

title: 'Yellow and Black Colors',

price: 70,

imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

},

{

title: 'Blue Color',

price: 100,

imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
}
]


  return (
<CartProvider>
  <Header onOpenCart={openCartHandler} />
  <Hero title="The Generics" />
  {showCart && <Cart onCloseCart={closeCartHandler} />}
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/store" element={<Store products={productsArr} />} />
    <Route path="/about" element={<About />} />
  </Routes>
</CartProvider>
  )

}
export default App;