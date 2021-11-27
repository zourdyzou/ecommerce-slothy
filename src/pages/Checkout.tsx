import React from "react";
import styled from "styled-components";
import { PageHero, StripeCheckout } from "../components";
// extra imports
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";

export const CheckoutPage = () => {
  return (
    <main>
      <PageHero title="checkout" />
      <Wrapper>
        <h1>Checkout here.</h1>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div``;
