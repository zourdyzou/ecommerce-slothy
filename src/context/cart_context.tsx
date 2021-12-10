import React, { useEffect, useContext, useReducer, createContext } from "react";
import reducer from "../reducers/cart_reducer";
import { ActionTypes } from "../types/action-types";
import { ProductData, SingleProduct } from "../types/data-types";

export interface CartContextType {
  cart: Array<ProductData>;
  total_items: number;
  total_amount: number;
  shipping_fee: number;
}

interface Props {
  children: React.ReactNode;
}

export const getDataOnLocalStorage = (type: string) => {
  const cart = localStorage.getItem(type) || "";

  if (cart.length === 0) {
    return [];
  }

  return JSON.parse(localStorage.getItem(type) || "");
};

const initialState = {
  cart: getDataOnLocalStorage("cart"),
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
    product: SingleProduct
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

  // remove item from the cart
  const removeItem = (id: string) => {
    cartDispatch({
      type: ActionTypes.REMOVE_CART_ITEM,
      payload: id,
    });
  };

  // toggle amount of product in user cart
  const toggleAmount = (id: string, value: number) => {};

  // clear cart / emptied the cart
  const clearCart = () => {
    cartDispatch({
      type: ActionTypes.CLEAR_CART,
    });
  };

  // saving data to user local storage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartState.cart));
  }, [cartState.cart]);

  return (
    <CartContext.Provider
      value={{
        ...cartState,
        addToCart,
        removeItem,
        toggleAmount,
        clearCart,
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
