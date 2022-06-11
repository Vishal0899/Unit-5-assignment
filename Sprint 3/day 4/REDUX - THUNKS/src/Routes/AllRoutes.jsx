import React from "react";
import { Route, Routes } from "react-router";
import { Dashboard } from "../Components/Dashboard";
import { Login } from "../Components/Login";
import { Register } from "../Components/Register";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
