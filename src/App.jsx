import { useState } from "react";
import { Switch, Route } from 'react-router-dom';
import Contact from "./pages/Contact";
import ProductDetails from "./pages/ProductDetails"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cart from "./components/Cart/Cart";
import CartProvider from "./components/store/CartProvider";
import Footer from "./components/Footer";
import Login from "./pages/Login"
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";

import "./App.css";

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

        {showCart && <Cart onCloseCart={closeCartHandler} />}
       <Hero />
       <main className="content">
        <Switch>
          <Route path="/" exact>
              <Home />
          </Route>

          <Route path="/store">
              <Store />
          </Route>

          <Route path="/about">
              <About />
          </Route>
          <Route path="/contact">
              <Contact />
          </Route>
          <Route path="/product/:productId">
          <ProductDetails />
          </Route>
          <Route path="/login">
          <Login />
          </Route>

        </Switch>
        </main>

        <Footer />
      </div>
    </CartProvider>
  );
};

export default App;