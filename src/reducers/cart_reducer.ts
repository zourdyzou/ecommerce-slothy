import { ActionTypes } from "../types/action-types";
import { ProductData } from "../types/data-types";

interface State {
  cart: Array<ProductData>;
  total_items: number;
  total_amount: number;
  shipping_fee: number;
}

const initialState = {
  cart: [],
  total_items: 0,
  total_amount: 0,
  shipping_fee: 534,
};

const cart_reducer = (state: State = initialState, action: any) => {
  return state;
  // throw new Error(`No Matching "${action.type}" - action type`)
};

export default cart_reducer;
