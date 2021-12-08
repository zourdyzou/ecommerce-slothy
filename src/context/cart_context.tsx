import React, { useEffect, useContext, useReducer, createContext } from "react";
import reducer from "../reducers/cart_reducer";
import { ActionTypes } from "../types/action-types";
import { ProductData } from "../types/data-types";

interface CartContextType {
  cart: Array<ProductData> | null;
  total_items: number | null;
  total_amount: number | null;
  shipping_fee: number | null;
}

interface Props {
  children: React.ReactNode;
}

const initialState = {
  cart: [],
  total_items: 0,
  total_amount: 0,
  shipping_fee: 534,
};

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: Props): JSX.Element => {
  const [cartState, cartDispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider
      value={{
        ...cartState,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
// make sure use
export const useCartContext = () => {
  return useContext(CartContext);
};
