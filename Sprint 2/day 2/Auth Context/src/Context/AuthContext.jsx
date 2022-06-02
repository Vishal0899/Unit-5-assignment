import React, { createContext, useState } from "react";

export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState(null);
  const [details, setDetails] = useState(null);
  const handleAuth = () => {
    setIsAuth(false);
    setToken(null);
  };
  if (details != null) {
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(details),
    })
      .then((res) => res.json())
      .then((data) => {
        setIsAuth(true);
        setToken(data.token);
      });
  }
  return (
    <AuthContext.Provider
      value={{ details, token, isAuth, setDetails, setIsAuth, handleAuth }}
    >
      {children}
    </AuthContext.Provider>
  );
};
