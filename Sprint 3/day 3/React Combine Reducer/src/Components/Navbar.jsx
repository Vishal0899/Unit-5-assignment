import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { authAction } from "../Redux/AuthReducer/action";

export const Navbar = () => {
  const isAuth = useSelector((state) => state.authReducer.auth);
  const dispatch = useDispatch();
  const handleAuth = () => {
    dispatch(authAction(!isAuth));
  };
  return (
    <div
      style={{
        backgroundColor: "rgb(15, 15, 74)",
        height: "30px",
        padding: "10px",
        marginBottom: "20px",
      }}
    >
      <Link
        style={{ marginRight: "1rem", color: "white", textDecoration: "none" }}
        to="/"
      >
        Home
      </Link>
      <Link
        style={{ marginRight: "1rem", color: "white", textDecoration: "none" }}
        to="/todos"
      >
        Todos
      </Link>
      <button onClick={handleAuth}>{isAuth ? "Logout" : "Login"}</button>
      <br />
      <br />
      <br />
    </div>
  );
};
