import React from "react";
import { useSelector } from "react-redux";

export const Counter = () => {
  const count = useSelector((state) => state.count);
//   console.log(count);
  return (
    <div>
      <h1>Count : {count}</h1>
    </div>
  );
};
