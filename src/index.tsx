import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./app";

import { BrowserRouter as Router } from "react-router-dom";
// import { ProductsProvider } from "./context/products_context";
// import { FilterProvider } from "./context/filter_context";
// import { CartProvider } from "./context/cart_context";
// import { UserProvider } from "./context/user_context";
// import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
