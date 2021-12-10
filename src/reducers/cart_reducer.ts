import { ActionTypes } from "../types/action-types";
import { SingleProduct, ICartData } from "../types/data-types";

interface State {
  cart: Array<ICartData>;
  total_items: number;
  total_amount: number;
  shipping_fee: number;
}

interface IAddToCartAction {
  type: ActionTypes.ADD_TO_CART;
  payload: {
    id: string;
    color: string;
    amount: number;
    product: SingleProduct;
  };
}

type Actions = IAddToCartAction;

const initialState = {
  cart: [],
  total_items: 0,
  total_amount: 0,
  shipping_fee: 534,
};

const cart_reducer = (state: State = initialState, action: Actions) => {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      const { amount, color, id, product } = action.payload;
      const tempItem = state.cart.find((i) => i.id === id + color);

      if (tempItem) {
        const temp_data_on_cart = state.cart.map((cartItem) => {
          if (cartItem.id === id + color) {
            /**
             * if the cartItem.id (product that already added to cart)
             * is match with the current (id: id + color)
             * * it will change the amount of price that user should pay
             * * and it cannot be greater than the product stock on the market.
             */
            let newAmount = cartItem.amount + amount;

            // a guard clause --> the amount cannot be greater than product stock
            if (newAmount > cartItem.stock_max) {
              newAmount = cartItem.stock_max;
            }

            return Object.assign({}, { ...cartItem }, { amount: newAmount });
          } else {
            // adding a new product data to the cart, if its not match (id: id + color)
            return cartItem;
          }
        });

        return Object.assign({}, { ...state }, { cart: temp_data_on_cart });
      } else {
        const adding_to_cart = {
          id: id + color,
          name: product.name,
          color,
          amount,
          image: product.images[0].url,
          price: product.price,
          stock_max: product.stock,
        };

        return Object.assign(
          {},
          { ...state },
          { cart: [...state.cart, adding_to_cart] }
        );
      }

    default:
      return state;
  }
};

export default cart_reducer;
