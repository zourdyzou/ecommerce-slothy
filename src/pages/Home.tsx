import React from "react";
import { FeaturedProducts, Hero, Services, Contact } from "../components";

export const HomePage = () => {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Services />
      <Contact />
    </main>
  );
};
