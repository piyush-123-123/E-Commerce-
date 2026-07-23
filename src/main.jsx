import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import AuthContextProvider from "./components/store/AuthContextProvider";
import {Provider} from "react-redux";
import store from "./components/store/redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
 
  <Provider store={store}>
  <AuthContextProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </AuthContextProvider>
  </Provider>
);