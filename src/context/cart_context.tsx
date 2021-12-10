import React, { useEffect, useContext, useReducer, createContext } from "react";
import reducer from "../reducers/cart_reducer";
import { ActionTypes } from "../types/action-types";
import { ProductData } from "../types/data-types";

export interface CartContextType {
  cart: Array<ProductData>;
  total_items: number;
  total_amount: number;
  shipping_fee: number;
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

const CartContext = createContext({});

export const CartProvider = ({ children }: Props): JSX.Element => {
  const [cartState, cartDispatch] = useReducer(reducer, initialState);

  // add to cart
  const addToCart = (
    id: string,
    color: string,
    amount: number,
    product: ProductData
  ) => {
    cartDispatch({
      type: ActionTypes.ADD_TO_CART,
      payload: {
        id,
        color,
        amount,
        product,
      },
    });
  };

  return (
    <CartContext.Provider
      value={{
        ...cartState,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// make sure to use this
export const useCartContext = () => {
  return useContext(CartContext);
};
