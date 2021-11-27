import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./app";
// import { ProductsProvider } from "./context/products_context";
// import { FilterProvider } from "./context/filter_context";
// import { CartProvider } from "./context/cart_context";
// import { UserProvider } from "./context/user_context";
// import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
