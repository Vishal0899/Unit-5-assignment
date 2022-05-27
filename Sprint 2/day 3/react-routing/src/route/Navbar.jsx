import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div style={{display:"flex", justifyContent : "center", gap : "1rem"}}>
      <Link to="/">Home</Link>
      <Link to="/product">Products</Link>
    </div>
  );
};
