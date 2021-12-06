import { ActionTypes } from "../types/action-types";
import { IFilters, ProductData } from "../types/data-types";

interface State {
  filtered_products: Array<ProductData>;
  all_products: Array<ProductData>;
  grid_view: boolean;
  sort: string;
  filters: IFilters;
}

interface IGridView {
  type: ActionTypes.SET_GRIDVIEW;
}

interface IListView {
  type: ActionTypes.SET_LISTVIEW;
}

interface ILoadProducts {
  type: ActionTypes.LOAD_PRODUCTS;
  payload: Array<ProductData>;
}

interface IUpdateSort {
  type: ActionTypes.UPDATE_SORT;
  payload: string;
}

interface ISortProducts {
  type: ActionTypes.SORT_PRODUCTS;
}

interface IUpdateFilters {
  type: ActionTypes.UPDATE_FILTERS;
  payload: {
    name: string;
    value: string;
  };
}

interface IClearFilters {
  type: ActionTypes.CLEAR_FILTERS;
}

type Actions =
  | IGridView
  | IListView
  | ILoadProducts
  | IUpdateSort
  | ISortProducts
  | IUpdateFilters
  | IClearFilters;

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
      /**
       * When the product loads we need a range of price in order to
       * place it inside filter component => price_range
       *
       * @date 2021-12-04
       * @returns {max_price => number}
       */
      let maxPrice: number[] | number = action.payload.map((p) => p.price);
      maxPrice = Math.max(...maxPrice);

      return Object.assign(
        {},
        { ...state },
        {
          all_products: [...action.payload],
          filtered_products: [...action.payload],
          filters: Object.assign(
            {},
            { ...state.filters },
            { max_price: maxPrice, price: maxPrice }
          ),
        }
      );

    case ActionTypes.SET_GRIDVIEW:
      return Object.assign({}, { ...state }, { grid_view: true });

    case ActionTypes.SET_LISTVIEW:
      return Object.assign({}, { ...state }, { grid_view: false });

    case ActionTypes.UPDATE_SORT:
      return Object.assign({}, { ...state }, { sort: action.payload });

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

      return Object.assign(
        {},
        { ...state },
        { filtered_products: tempProducts }
      );

    case ActionTypes.UPDATE_FILTERS:
      const { name, value } = action.payload;

      return {
        ...state,
        filters: Object.assign({}, { ...state.filters }, { [name]: value }),
      };

    case ActionTypes.CLEAR_FILTERS:
      return Object.assign(
        {},
        { ...state },
        {
          filters: {
            ...state.filters,
            text: "",
            company: "all",
            category: "all",
            color: "all",
            price: state.filters.max_price,
            shipping: false,
          },
        }
      );

    default:
      return state;
  }
};

export default filter_reducer;
