import { useState ,useContext,lazy,Suspense} from "react";
import { Switch, Route ,Redirect} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cart from "./components/Cart/Cart";
import CartProvider from "./components/store/CartProvider";
import Footer from "./components/Footer";
import AuthContext from "./components/store/AuthContext"
import "./App.css";
const Home = lazy(() => import("./pages/Home"));
const Store = lazy(() => import("./pages/Store"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));
const Login = lazy(() => import("./pages/Login"));

const App = () => {

  const ctx=useContext(AuthContext);
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
       <Suspense fallback={<h2>Loading...</h2>}>
       <main className="content">
        <Switch>
          <Route path="/" exact>
              <Home />
          </Route>
          <Route path="/store">
          {ctx.isLoggedIn ?  <Store /> : <Redirect to="/login" /> }
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
        </Suspense>

        <Footer />
      </div>
    </CartProvider>
  );
};

export default App;