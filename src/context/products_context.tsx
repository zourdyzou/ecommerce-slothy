import axios from "axios";
import React, { ReactNode, useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/products_reducer";
import { products_url as url } from "../utils/constants";
import { ActionTypes } from "../types/action-types";

const initialState = {};

const ProductsContext = React.createContext({});

interface Props {
  children: ReactNode;
}

export const ProductsProvider = ({ children }: Props): JSX.Element => {
  return (
    <ProductsContext.Provider value="products context">
      {children}
    </ProductsContext.Provider>
  );
};

// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext);
};
