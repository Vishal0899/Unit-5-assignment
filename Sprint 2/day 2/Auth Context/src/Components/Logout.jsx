import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

export const Logout = () => {
  const { details, token, isAuth, setDetails, setIsAuth, handleAuth } =
    useContext(AuthContext);
  return (
    <div>
      <button
        onClick={() => {
          handleAuth();
          setDetails(null);
        }}
      >
        Logout
      </button>

      <h1>
        Email of user is :
        <span style={{ fontSize: "1.5rem", fontWeight: "400" }}>
          {details?.email}
        </span>
      </h1>
      <h1>
        token : {token}
        <span style={{ fontSize: "1.5rem", fontWeight: "400" }}> {token}</span>
      </h1>
    </div>
  );
};
