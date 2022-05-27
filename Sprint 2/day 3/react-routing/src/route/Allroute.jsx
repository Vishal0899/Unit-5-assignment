import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { ProductPage } from "./ProductPage";
import { Products } from "./Products";

export const Allroute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Products />} />
      <Route path="/product/:id" element={<ProductPage />} />
    </Routes>
  );
};
