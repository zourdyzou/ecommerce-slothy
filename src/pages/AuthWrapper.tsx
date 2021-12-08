import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

export const AuthWrapper: React.FC = () => {
  return <h4>AuthWrapper Component</h4>;
};

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
`;
