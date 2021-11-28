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

interface GridView {
  type: ActionTypes.SET_GRIDVIEW;
}

interface ListView {
  type: ActionTypes.SET_LISTVIEW;
}

interface LoadProducts {
  type: ActionTypes.LOAD_PRODUCTS;
  payload: Array<ProductData>;
}

type Actions = GridView | ListView | LoadProducts;

const initialState = {
  filtered_products: [],
  all_products: [],
  grid_view: false,
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

const filter_reducer = (state: State = initialState, action: Actions) => {
  switch (action.type) {
    case ActionTypes.LOAD_PRODUCTS:
      let maxPrice: number[] | number = action.payload.map((p) => p.price);
      maxPrice = Math.max(...maxPrice);
      return {
        ...state,
        all_products: [...action.payload],
        filtered_products: [...action.payload],
        filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
      };

    case ActionTypes.SET_GRIDVIEW:
      return {
        ...state,
        grid_view: true,
      };

    case ActionTypes.SET_LISTVIEW:
      return {
        ...state,
        grid_view: false,
      };

    default:
      return state;
  }
};

export default filter_reducer;
