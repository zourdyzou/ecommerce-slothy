import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

import logo from "../../assets/logo.svg";

import * as routes from "../../utils/routes";

import { links } from "../../utils/constants";
import { useProductsContext } from "../../context/products_context";

import { CartButtons } from "../atoms/CartButtons";
import { useUserContext } from "../../context/user_context";

export const Navbar: React.FC = () => {
  const { sidebarOpen }: any = useProductsContext();
  const { currentUser }: any = useUserContext();
  return (
    <Container>
      <div className="nav-center">
        <div className="nav-header">
          <Link to={routes.home}>
            <img src={logo} alt="logo-container profile-company" />
          </Link>
          <button type="button" className="nav-toggle" onClick={sidebarOpen}>
            <FaBars />
          </button>
        </div>
        {/* nav-links */}
        <ul className="nav-links">
          {links.map((link) => {
            return (
              <li key={link.id}>
                <Link to={link.url}>{link.text}</Link>
              </li>
            );
          })}

          {currentUser ? (
            <li>
              <Link to={routes.checkout}>checkout</Link>
            </li>
          ) : null}
        </ul>
        <CartButtons />
      </div>
    </Container>
  );
};

const Container = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 175px;
      margin-left: -15px;
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--clr-grey-3);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`;
