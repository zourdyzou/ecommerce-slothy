import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { formatPrice } from "../../utils/helpers";

interface Props {
  image: string;
  name: string;
  price: number;
  id: string;
}

export const Product: React.FC<Props> = ({ image, name, id, price }) => {
  return (
    <Wrapper>
      <div className="container">
        <img src={image} alt={name} />
        <Link to={`/products/${id}`} className="link">
          <FaSearch />
        </Link>
      </div>
      <article>
        <h5>{name}</h5>
        <p>{formatPrice(price)}</p>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  .container {
    position: relative;
    background: var(--clr-black);
    border-radius: var(--radius);
  }
  img {
    width: 100%;
    display: block;
    object-fit: cover;
    border-radius: var(--radius);
    transition: var(--transition);
  }
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--clr-primary-5);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: var(--clr-white);
    }
  }
  .container:hover img {
    opacity: 0.5;
  }
  .container:hover .link {
    opacity: 1;
  }
  article {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  article h5,
  article p {
    margin-bottom: 0;
    font-weight: 400;
  }

  article p {
    color: var(--clr-primary-5);
    letter-spacing: var(--spacing);
  }
`;
