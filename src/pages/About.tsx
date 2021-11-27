import React from "react";
import styled from "styled-components";

import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg.jpeg";

export const AboutPage: React.FC = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img
          loading="lazy"
          src={aboutImg}
          alt="hero about the comfyslothy, there is a desk too"
        />
        <article>
          <div className="title">
            <h2>our story.</h2>
            <div className="underline" />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel
            aspernatur est consequuntur voluptas ea tempore tenetur accusantium
            ullam laborum magnam, dolor officiis deserunt hic asperiores porro
            quam, nulla delectus deleniti! Suscipit excepturi nisi cumque nemo
            eos. Ea repudiandae iusto accusantium illo sunt repellendus harum,
            incidunt, dolorem consequatur debitis labore provident a quibusdam!
            Molestiae, nulla cum.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
