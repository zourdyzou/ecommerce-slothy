import React, { useEffect, useContext, useReducer, ReactNode } from "react";
import reducer from "../reducers/filter_reducer";
import { ActionTypes } from "../types/action-types";
import { useProductsContext } from "./products_context";

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

const FilterContext = React.createContext({});

interface Props {
  children: ReactNode;
}

export const FilterProvider = ({ children }: Props): JSX.Element => {
  const { products }: any = useProductsContext();
  const [filterState, filterDispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    filterDispatch({ type: ActionTypes.LOAD_PRODUCTS, payload: products });
  }, [products]);

  useEffect(() => {
    filterDispatch({
      type: ActionTypes.SORT_PRODUCTS,
    });
  }, [products, filterState?.sort]);

  const setGridView = () => {
    filterDispatch({
      type: ActionTypes.SET_GRIDVIEW,
    });
  };

  const setListView = () => {
    filterDispatch({
      type: ActionTypes.SET_LISTVIEW,
    });
  };

  const updateSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    filterDispatch({
      type: ActionTypes.UPDATE_SORT,
      payload: value,
    });
  };

  const updateFilters = (e: React.ChangeEvent<HTMLInputElement>) => {
    let name = e.target.name;

    let value: any = e.target.value;

    if (name === "category") {
      value = e.target.textContent;
    }

    if (name === "color") {
      value = e.target.dataset.color;
    }

    if (name === "price") {
      value = Number(value);
    }

    if (name === "shipping") {
      value = e.target.checked;
    }

    filterDispatch({
      type: ActionTypes.UPDATE_FILTERS,
      payload: {
        name,
        value,
      },
    });
  };

  const clearFilters = () => {
    filterDispatch({
      type: ActionTypes.CLEAR_FILTERS,
    });
  };

  return (
    <FilterContext.Provider
      value={{
        ...filterState,
        filterDispatch,
        setGridView,
        setListView,
        updateSort,
        updateFilters,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext);
};
