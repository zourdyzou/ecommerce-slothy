import { ActionTypes } from "../types/action-types";
import { ProductData, SingleProduct } from "../types/data-types";

interface State {
  cart: Array<ProductData>;
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
        return Object.assign({}, { ...state }, {});
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
