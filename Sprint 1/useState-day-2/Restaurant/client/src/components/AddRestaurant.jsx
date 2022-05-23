import axios from "axios";
import React, { useState } from "react";
// import data from "../data.json";
export const AddRestaurant = () => {
  const [addDetail, setAddDetail] = useState({
    name: "",
    cuisine: "",
    cost: "",
    minPrice: "",
    paymentMethods: "",
    rating: "",
    votes: "",
    reviews: "",
    image: "",
  });
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setAddDetail({ ...addDetail, [name]: value });
    console.log(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8000/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addDetail),
    })
      // console.log(addDetail);
      .then((res) => console.log())
      .catch((err) => console.log(err));
  };
  //25
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          id=""
          placeholder="Restaurant Name"
          onChange={handleChange}
        />

        <input
          type="text"
          name="cuisine"
          id=""
          placeholder="Category"
          onChange={handleChange}
        />
        <input
          type="text"
          name="cost"
          id=""
          placeholder="cost"
          onChange={handleChange}
        />
        <input
          type="text"
          name="minPrice"
          id=""
          placeholder="minPrice"
          onChange={handleChange}
        />
        <select name="payment_method">
          <option value="card">Accepts card payments only</option>
          <option value="upi">Accepts Upi payments only</option>
          <option value="cash">Accepts cash payments only</option>
        </select>
        <input
          type="text"
          name="rating"
          id=""
          placeholder="Rating"
          onChange={handleChange}
        />
        <input
          type="text"
          name="votes"
          id=""
          placeholder="Votes"
          onChange={handleChange}
        />
        <input
          type="text"
          name="reviews"
          id=""
          placeholder="Reviews"
          onChange={handleChange}
        />
        <input
          type="text"
          name="image"
          id=""
          placeholder="FoodImg"
          onChange={handleChange}
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};
