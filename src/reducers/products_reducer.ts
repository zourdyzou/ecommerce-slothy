import { ActionTypes } from "../types/action-types";
import { ProductData, SingleProduct } from "../types/data-types";

interface State {
  isSidebarOpen: boolean;
  products_loading: boolean;
  products_error: boolean;
  products: Array<ProductData>;
  featured_products: Array<ProductData>;
  single_product_loading: boolean;
  single_product_error: boolean;
  single_product: SingleProduct | any;
}

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

const products_reducer = (state: State = initialState, action: any) => {
  return state;
  // throw new Error(`No Matching "${action.type}" - action type`)
};

export default products_reducer;
