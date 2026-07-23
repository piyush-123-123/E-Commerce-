import { useContext, lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer";
import AuthContext from "./store/AuthContext";
import { uiActions } from "./store/redux_store/uiSlice";

import "./App.css";

const Home = lazy(() => import("./pages/Home"));
const Store = lazy(() => import("./pages/Store"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));
const Login = lazy(() => import("./pages/Login"));
const SignUp = lazy(() => import("./pages/SignUp"));

const App = () => {
  const ctx = useContext(AuthContext);

  const showCart = useSelector((state) => state.ui.showCart);
  const dispatch = useDispatch();

  const toggleCartHandler = () => {
    dispatch(uiActions.toggleCart());
  };

  return (
    <div className="app">
      <Navbar onOpenCart={toggleCartHandler} />

      {showCart && <Cart onCloseCart={toggleCartHandler} />}

      <Hero />

      <Suspense fallback={<h2>Loading...</h2>}>
        <main className="content">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>

            <Route path="/store">
              {ctx.isLoggedIn ? <Store /> : <Redirect to="/login" />}
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

            <Route path="/signup">
              <SignUp />
            </Route>
          </Switch>
        </main>
      </Suspense>

      <Footer />
    </div>
  );
};

export default App;