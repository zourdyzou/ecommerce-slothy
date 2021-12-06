import React, { useCallback } from "react";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";
import { useFilterContext } from "../../context/filter_context";
import { useGetUniqueValues, formatPrice } from "../../utils/helpers";
import { IFilters } from "../../types/data-types";

export const Filter: React.FC = () => {
  const { filters, updateFilters, all_products, clearFilters }: any =
    useFilterContext();

  const {
    text,
    category,
    color,
    company,
    max_price,
    min_price,
    price,
    shipping,
  }: IFilters = filters;

  const categories = useGetUniqueValues(all_products, "category");
  const companies = useGetUniqueValues(all_products, "company");
  const colors = useGetUniqueValues(all_products, "colors");

  return (
    <Wrapper>
      <div className="content">
        <form onSubmit={(e) => e.preventDefault()}>
          {/* ---- search input ---- */}
          <div className="form-control">
            <input
              type="text"
              name="text"
              value={text}
              placeholder="search"
              onChange={updateFilters}
              className="search-input"
            />
          </div>
          {/* ---- end of search input ---- */}
          {/* ---- categories ---- */}
          <div className="form-control">
            <h5>category</h5>
            <div>
              {categories.map((c, indx: number) => {
                return (
                  <button
                    onClick={(e) => updateFilters(e)}
                    key={indx}
                    type="button"
                    name="category"
                    className={category === c.toLowerCase() ? "active" : ""}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </div>
          {/* ---- end categories ---- */}
          {/* ---- companies <--> LIST ---- */}
          <div className="form-control">
            <h5>company</h5>
            <select
              name="company"
              value={company}
              onClick={(e) => updateFilters(e)}
              className="company"
            >
              {companies.map((c, indx: number) => {
                return (
                  <option key={indx} value={c}>
                    {c}
                  </option>
                );
              })}
            </select>
          </div>
          {/* ---- end companies <>----<> list ---- */}
          {/* ---- colors ---- */}
          <div className="form-control">
            <h5>colors</h5>
            <div className="colors">
              {colors.map((c, indx: number) => {
                if (c === "all") {
                  return (
                    <button
                      key={indx}
                      name="color"
                      onClick={(e) => updateFilters(e)}
                      data-color="all"
                      className={color === "all" ? "all-btn active" : "all-btn"}
                    >
                      all
                    </button>
                  );
                }

                return (
                  <button
                    key={indx}
                    name="color"
                    style={{
                      background: c,
                    }}
                    onClick={(e) => updateFilters(e)}
                    data-color={c}
                    className={color === c ? "color-btn active" : "color-btn"}
                  >
                    {color === c ? <FaCheck /> : null}
                  </button>
                );
              })}
            </div>
          </div>
          {/* ---- end colors ---- */}
          {/* ---- price ---- */}
          <div className="form-control">
            <h5>price</h5>
            <p className="price">{formatPrice(price)}</p>
            <input
              type="range"
              name="price"
              min={min_price}
              max={max_price}
              value={price}
              onChange={(e) => updateFilters(e)}
            />
          </div>
          {/* ---- end price ---- */}
          {/* shipping */}
          <div className="form-control shipping">
            <label htmlFor="shipping">free shipping</label>
            <input
              type="checkbox"
              name="shipping"
              id="shipping"
              checked={shipping}
              onChange={(e) => updateFilters(e)}
            />
          </div>
          {/* end of  shipping */}
        </form>
        <button type="button" className="clear-btn" onClick={clearFilters}>
          clear filters
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }

  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
  .active {
    border-color: var(--clr-grey-5);
  }
  .company {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
  }
  .colors {
    display: flex;
    align-items: center;
  }
  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.5rem;
      color: var(--clr-white);
    }
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .price {
    margin-bottom: 0.25rem;
  }
  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
  }
  .clear-btn {
    background: var(--clr-red-dark);
    color: var(--clr-white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`;
