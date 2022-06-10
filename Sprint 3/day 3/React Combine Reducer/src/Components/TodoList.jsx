import React from "react";
import { useSelector } from "react-redux";

export const TodoList = () => {
  const todos = useSelector((state) => state?.todoReducer?.todos);
  const loading = useSelector((state) => state.loading);
  console.log(todos);
  return (
    <div>
      <h1>Todos</h1>
      {loading && <div>Loading....</div>}
      {todos?.map((elem) => (
        <div key={elem.id}>{elem.title} - {elem.status === false ? "Not Complicated" : "Completed"}</div>
      ))}
    </div>
  );
};

