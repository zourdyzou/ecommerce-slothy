import React, { useContext, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const UserContext = React.createContext({});

interface Props {
  children: React.ReactNode;
}

type User = {
  sub?: string;
  name?: string;
  given_name?: string;
  family_name?: string;
  middle_name?: string;
  nickname?: string;
  preferred_username?: string;
  profile?: string;
  picture?: string;
  website?: string;
  email?: string;
  email_verified?: boolean;
  gender?: string;
  birthdate?: string;
  zoneinfo?: string;
  locale?: string;
  phone_number?: string;
  phone_number_verified?: boolean;
  address?: {
    country?: string;
  };
  updated_at?: string;
};

export const UserProvider = ({ children }: Props) => {
  const { error, loginWithRedirect, logout, user } = useAuth0();

  const [currentUser, setCurrentUser] = useState<User>();

  useEffect(() => {
    setCurrentUser(user as User);
  }, [user]);

  console.log(user);

  return (
    <UserContext.Provider
      value={{
        error,
        user,
        logout,
        loginWithRedirect,
        currentUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
// make sure use
export const useUserContext = () => {
  return useContext(UserContext);
};
