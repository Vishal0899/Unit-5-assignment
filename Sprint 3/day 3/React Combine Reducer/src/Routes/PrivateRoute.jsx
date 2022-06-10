import React from "react";
import { useSelector } from "react-redux";

export const PrivateRoute = ({ children }) => {
  const isAuth = useSelector((state) => state.authReducer.auth);

  return <div>{isAuth ?  children  : "Login First"}</div>;
};
