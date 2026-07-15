import { useState } from "react";
import { Outlet } from "react-router-dom";
import Hero from "./components/Hero"
import Navbar from "./components/Navbar";
import Cart from "./components/Cart/Cart";
import CartProvider from "./components/Store/CartProvider";
import Footer from "./components/Footer"
import "./app.css";

const App = () => {
  const [showCart, setShowCart] = useState(false);

  const openCartHandler = () => {
    setShowCart(true);
  };

  const closeCartHandler = () => {
    setShowCart(false);
  };

  return (

    <CartProvider>


     <div className="app">
    <Navbar onOpenCart={openCartHandler} />

      <Hero title="The Generics" />
   
    

    {showCart && <Cart onCloseCart={closeCartHandler} />}

    <main className="content">
      <Outlet />
    </main>

    <Footer />
  </div>
    </CartProvider>
  );
};

export default App;