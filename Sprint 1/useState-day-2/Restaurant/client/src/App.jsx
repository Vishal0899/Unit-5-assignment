import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Pagination } from "./components/Pagination";
import { RestaurantDetails } from "./components/RestaurantDetails";
import { FetchRestaurants } from "./components/fetchRestaurants";
import { AddRestaurant } from "./components/AddRestaurant";
// import { Pagination } from "./components/Pagination";

function App() {
  
  return (
    <div className="App">
      <AddRestaurant/>
      <FetchRestaurants />
    </div>
  );
}

export default App;
