import { ActionTypes } from "../types/action-types";
import { ProductData } from "../types/data-types";

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
    product: ProductData;
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
      return Object.assign({}, { ...state }, {});

    default:
      return state;
  }
};

export default cart_reducer;
