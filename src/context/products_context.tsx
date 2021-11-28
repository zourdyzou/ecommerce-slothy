import axios from "axios";
import React, {
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useReducer,
} from "react";
import reducer from "../reducers/products_reducer";
import { products_url } from "../utils/constants";
import { ActionTypes } from "../types/action-types";

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

const ProductsContext = React.createContext({});

interface Props {
  children: ReactNode;
}

export const ProductProvider = ({ children }: Props): JSX.Element => {
  const [productState, productDispatch] = useReducer(reducer, initialState);

  const sidebarClose = () => {
    productDispatch({
      type: ActionTypes.SIDEBAR_CLOSE,
    });
  };

  const sidebarOpen = () => {
    productDispatch({
      type: ActionTypes.SIDEBAR_OPEN,
    });
  };

  const fetchProducts = useCallback(async (url: string) => {
    try {
      productDispatch({ type: ActionTypes.GET_PRODUCTS_BEGIN });

      const response = await axios.get(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status >= 300) {
        throw new Error("something is wrong with your connection!");
      }

      if (Object.keys(response.data).length > 0) {
        productDispatch({
          type: ActionTypes.GET_PRODUCTS_SUCCESS,
          payload: response.data,
        });

        console.log(response.data);
      }
    } catch (error: TypeError | any) {
      productDispatch({ type: ActionTypes.GET_PRODUCTS_ERROR });
    }
  }, []);

  const fetchSingleProduct = useCallback(async (url: string) => {
    try {
      productDispatch({ type: ActionTypes.GET_SINGLE_PRODUCT_BEGIN });

      const response = await axios.get(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status >= 300) {
        throw new Error("something is wrong with your connection!");
      }

      if (Object.keys(response.data).length > 0) {
        productDispatch({
          type: ActionTypes.GET_SINGLE_PRODUCT_SUCCESS,
          payload: response.data,
        });
      }
    } catch (error: TypeError | any) {
      productDispatch({ type: ActionTypes.GET_SINGLE_PRODUCT_ERROR });
    }
  }, []);

  useEffect(() => {
    fetchProducts(products_url);
  }, [fetchProducts]);

  return (
    <ProductsContext.Provider
      value={{
        ...productState,
        productDispatch,
        sidebarClose,
        sidebarOpen,
        fetchSingleProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext);
};
