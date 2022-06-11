import React, { useState } from "react";
import { Link } from "react-router-dom";
export const Navbar = () => {
  const [authState, setAuthState] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        margin: ".5rem",
        padding: "1rem",
        border: "1px solid #000",
        alignItems: "center",
      }}
    >
      <Link to="/" style={{ textDecoration: "none", color: "#000" }}>
        <div>LOGO</div>
      </Link>
      <div>
        <ul style={{ listStyle: "none", display: "flex", gap: "1rem" }}>
          <Link
            to="/register"
            style={{ textDecoration: "none", color: "#000" }}
          >
            <li>Register</li>
          </Link>
          <Link to="/login" style={{ textDecoration: "none", color: "#000" }}>
            <li>{!authState ? "Login" : "Logout"}</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};
