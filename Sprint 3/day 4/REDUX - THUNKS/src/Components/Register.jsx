import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setDetails } from "../Redux/Auth/action";
const data = {
  username: "",
  email: "",
  password: "",
  mobile: "",
  description: "",
};
export const Register = () => {
  const [form, setForm] = useState(data);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.details);
  const handleSubmit = (e) => {
    e.preventDefault();
    setDetails({ form, dispatch });
    console.log(state);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <input
          type="text"
          value={form.username}
          name="username"
          placeholder="Username"
          onChange={handleChange}
        />
        <input
          type="email"
          value={form.email}
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={form.password}
          placeholder="Password"
          onChange={handleChange}
        />
        <input
          type="number"
          name="mobile"
          value={form.mobile}
          placeholder="Mobile"
          onChange={handleChange}
        />
        <textarea
          value={form.description}
          name="description"
          onChange={handleChange}
          cols="20"
          rows="5"
          placeholder="Description"
        ></textarea>
        {/* <Link to="/login"> */}
        <input
          style={{ width: "110px", height: "30px" }}
          type="submit"
          value="Register"
        />
        {/* </Link> */}
      </form>
    </div>
  );
};
