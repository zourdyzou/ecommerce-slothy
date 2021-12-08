import React from "react";
import { Loading } from "../atoms/Loading";

import { useFilterContext } from "../../context/filter_context";
import { useProductsContext } from "../../context/products_context";

import { GridView } from "../atoms/GridView";
import { ListView } from "../molecules/ListView";

export const ProductList: React.FC = () => {
  const { filtered_products: products, grid_view }: any = useFilterContext();
  const { products_loading: loading }: any = useProductsContext();

  if (loading) {
    return <Loading />;
  }

  if (products.length < 1) {
    return (
      <h5 style={{ textTransform: "none" }}>
        Sorry, no products matched your search!
      </h5>
    );
  }

  if (grid_view === false) {
    return <ListView products={products} />;
  }

  return <GridView products={products} />;
};
