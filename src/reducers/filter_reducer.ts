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

interface UpdateSort {
  type: ActionTypes.UPDATE_SORT;
  payload: string;
}

interface SortProducts {
  type: ActionTypes.SORT_PRODUCTS;
}

type Actions = GridView | ListView | LoadProducts | UpdateSort | SortProducts;

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

    case ActionTypes.UPDATE_SORT:
      return { ...state, sort: action.payload };

    case ActionTypes.SORT_PRODUCTS:
      const { sort, filtered_products } = state;
      let tempProducts = [...filtered_products];

      if (sort === "price-lowest") {
        tempProducts = tempProducts.sort((a, b) => {
          return a.price - b.price;
        });
      }

      if (sort === "price-highest") {
        tempProducts = tempProducts.sort((a, b) => {
          return b.price - a.price;
        });
      }

      if (sort === "name-a") {
        tempProducts = tempProducts.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
      }

      if (sort === "name-z") {
        tempProducts = tempProducts.sort((a, b) => {
          return b.name.localeCompare(a.name);
        });
      }

      return { ...state, filtered_products: tempProducts };

    default:
  }
};

export default filter_reducer;
