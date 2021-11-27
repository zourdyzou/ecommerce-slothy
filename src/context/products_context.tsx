import axios from "axios";
import React, { ReactNode, useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/products_reducer";
import { products_url as url } from "../utils/constants";
import { ActionTypes } from "../types/action-types";

const initialState = {
  isSidebarOpen: false,
  products_loading: false,
  products_error: false,
  products: [],
  featured_products: [],
  single_product_loading: false,
  single_product_error: false,
  single_product: {},
};

const ProductsContext = React.createContext({});

interface Props {
  children: ReactNode;
}

export const ProductProvider = ({ children }: Props): JSX.Element => {
  const [productState, productDispatch] = useReducer(reducer, initialState);

  const sidebarClose = () => {
    productDispatch({
      type: ActionTypes.SIDEBAR_CLOSE,
    });
  };

  const sidebarOpen = () => {
    productDispatch({
      type: ActionTypes.SIDEBAR_OPEN,
    });
  };

  return (
    <ProductsContext.Provider
      value={{
        ...productState,
        productDispatch,
        sidebarClose,
        sidebarOpen,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext);
};
