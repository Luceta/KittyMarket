import React, { createContext, useContext, useState } from "react";

// TODO: Context user token
const UserContext = createContext({
  loggedUser: {
    email: "",
    username: "",
    accountname: "",
    intro: "",
    image: "",
  },
  loggedIn: false,
});

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState({});
  const dispatch = () => {
    setUser({ token, isLogin });
  };

  const value = { user, dispatch };
  return <UserContext.Provider children={children} value={value} />;
};

const useUserContext = () => {
  const userContext = useContext(UserContext);
  if (!userContext) {
    throw new Error("User Context.Provider is not found");
  }
  return userContext;
};

export { useUserContext, UserProvider, UserContext };
