import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { useCartContext } from "../../context/cart_context";

import { CartItem } from "../molecules/CartItem";
import { CartTotals } from "../molecules/CartTotals";
import { CartColumns } from "../molecules/CartColumns";
import { ICartData } from "../../types/data-types";
import { products } from "../../utils/routes";

export const CartContent: React.FC = () => {
  const { cart, clearCart }: any = useCartContext();

  return (
    <Wrapper className="section section-center">
      <CartColumns />

      {cart.map((product: ICartData) => {
        return <CartItem key={product.id} {...product} />;
      })}
      <hr />

      <div className="link-container">
        <Link to={products} className="link-btn">
          continue shopping
        </Link>

        <button className="link-btn clear-btn" onClick={clearCart}>
          clear shopping cart
        </button>
      </div>
      <CartTotals />
    </Wrapper>
  );
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
