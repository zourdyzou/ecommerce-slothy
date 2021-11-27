import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { useCartContext } from "../../context/cart_context";

import { CartItem } from "../molecules/CartItem";
import { CartTotals } from "../molecules/CartTotals";
import { CartColumns } from "../molecules/CartColumns";

export const CartContent: React.FC = () => {
  return <h4>cart content </h4>;
};

const Wrapper = styled.section`
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
  .link-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    background: var(--clr-primary-5);
    color: var(--clr-white);
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    font-weight: 400;
    cursor: pointer;
  }
  .clear-btn {
    background: var(--clr-black);
  }
`;
