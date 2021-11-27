import React, { useEffect, useContext, useReducer, ReactNode } from "react";
import reducer from "../reducers/filter_reducer";
import { ActionTypes } from "../types/action-types";

import { useProductsContext } from "./products_context";

const initialState = {};

const FilterContext = React.createContext({});

interface Props {
  children: ReactNode;
}

export const FilterProvider = ({ children }: Props): JSX.Element => {
  return (
    <FilterContext.Provider value="filter context">
      {children}
    </FilterContext.Provider>
  );
};
// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext);
};
