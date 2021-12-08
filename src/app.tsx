import React from "react";

import { Switch, Route } from "react-router-dom";
import { Footer, Navbar, Sidebar } from "./components";
import { AboutPage } from "./pages/About";
import { CartPage } from "./pages/Cart";
import { CheckoutPage } from "./pages/Checkout";
import { ErrorPage } from "./pages/Error";

import { HomePage } from "./pages/Home";
import { ProductsPage } from "./pages/ProductsPage";
import { SingleProductPage } from "./pages/SingleProduct";

import * as routes from "./utils/routes";

export const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route exact path={routes.about} component={AboutPage} />
        <Route exact path={routes.cart} component={CartPage} />
        <Route exact path={routes.products} component={ProductsPage} />
        <Route
          exact
          path={routes.single_product}
          children={<SingleProductPage />}
        />
        <Route exact path={routes.checkout} component={CheckoutPage} />
        <Route exact path={routes.error} component={ErrorPage} />
      </Switch>
      <Footer />
    </>
  );
};
