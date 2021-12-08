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

interface OpenSidebar {
  type: ActionTypes.SIDEBAR_OPEN;
}

interface CloseSidebar {
  type: ActionTypes.SIDEBAR_CLOSE;
}

interface GetProducts {
  type: ActionTypes.GET_PRODUCTS_BEGIN;
}

interface GetProductsError {
  type: ActionTypes.GET_PRODUCTS_ERROR;
}

interface GetProductsData {
  type: ActionTypes.GET_PRODUCTS_SUCCESS;
  payload: ProductData[];
}

interface GetSingleProductData {
  type: ActionTypes.GET_SINGLE_PRODUCT_SUCCESS;
  payload: SingleProduct;
}

interface GetSingleProductLoading {
  type: ActionTypes.GET_SINGLE_PRODUCT_BEGIN;
}

interface GetProductsError {
  type: ActionTypes.GET_PRODUCTS_ERROR;
}

interface GetSingleProductError {
  type: ActionTypes.GET_SINGLE_PRODUCT_ERROR;
}

type Actions =
  | CloseSidebar
  | OpenSidebar
  | GetProducts
  | GetProductsError
  | GetProductsData
  | GetProductsError
  | GetSingleProductData
  | GetSingleProductError
  | GetSingleProductLoading;

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

const products_reducer = (state: State = initialState, action: Actions) => {
  switch (action.type) {
    case ActionTypes.SIDEBAR_OPEN:
      return {
        ...state,
        isSidebarOpen: true,
      };
    case ActionTypes.SIDEBAR_CLOSE:
      return {
        ...state,
        isSidebarOpen: false,
      };

    case ActionTypes.GET_PRODUCTS_BEGIN:
      return {
        ...state,
        products_loading: true,
      };

    case ActionTypes.GET_PRODUCTS_SUCCESS:
      const featured_products = action.payload.filter(
        (product) => product.featured === true
      );
      return {
        ...state,
        products_loading: false,
        products: action.payload,
        featured_products,
      };

    case ActionTypes.GET_PRODUCTS_ERROR:
      return {
        ...state,
        products_loading: false,
        products_error: true,
      };

    case ActionTypes.GET_SINGLE_PRODUCT_BEGIN:
      return {
        ...state,
        single_product_loading: true,
        single_product_error: false,
      };

    case ActionTypes.GET_SINGLE_PRODUCT_SUCCESS:
      return {
        ...state,
        single_product_loading: false,
        single_product: action.payload,
      };

    case ActionTypes.GET_SINGLE_PRODUCT_ERROR:
      return {
        ...state,
        single_product_loading: false,
        single_product_error: true,
      };

    default:
      return state;
  }
};

// throw new Error(`No Matching "${action.type}" - action type`)

export default products_reducer;
