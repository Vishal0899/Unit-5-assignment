import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";

export const Login = () => {
  const { setDetails } = useContext(AuthContext);
  const [email, setEmail] = useState(null);
  const [pass, setPass] = useState(null);

  return (
    <div>
      <input
        type="text"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="password"
        onChange={(e) => setPass(e.target.value)}
      />
      <button
        onClick={() => {
          setDetails({
            email: email,
            password: pass,
          });
        }}
      >
        Login
      </button>
    </div>
  );
};
