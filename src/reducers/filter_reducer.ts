import { ActionTypes } from "../types/action-types";
import { ProductData } from "../types/data-types";

interface State {
  filtered_products: Array<ProductData>;
  all_products: Array<ProductData>;
  grid_view: boolean;
  sort: string;
  filters: {
    text: string;
    company: string;
    category: string;
    color: string;
    min_price: number;
    max_price: number;
    price: number;
    shipping: boolean;
  };
}

const initialState = {
  filtered_products: [],
  all_products: [],
  grid_view: true,
  sort: "price-lowest",
  filters: {
    text: "",
    company: "all",
    category: "all",
    color: "all",
    min_price: 0,
    max_price: 0,
    price: 0,
    shipping: false,
  },
};

const filter_reducer = (state: State = initialState, action: any) => {
  return state;
  // throw new Error(`No Matching "${action.type}" - action type`)
};

export default filter_reducer;
