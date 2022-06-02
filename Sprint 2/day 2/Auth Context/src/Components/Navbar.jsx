import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Login } from "./Login";
import { Logout } from "./Logout";

export const Navbar = () => {
  const { details, token, isAuth, setDetails, setIsAuth, handleAuth } =
    useContext(AuthContext);

  return (
    <div>
      <div onClick={handleAuth}>{isAuth ? <Logout /> : <Login />}</div>
    </div>
  );
};
