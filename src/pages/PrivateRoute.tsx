import React, { ReactNode } from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { home } from "../utils/routes";

type IProps = {
  children: ReactNode;
} & RouteProps;

export const PrivateRoute: React.FC<IProps> = ({ children, ...restProps }) => {
  const { user } = useAuth0();

  return (
    <Route
      {...restProps}
      render={() => {
        return user ? children : <Redirect to={home} />;
      }}
    />
  );
};
