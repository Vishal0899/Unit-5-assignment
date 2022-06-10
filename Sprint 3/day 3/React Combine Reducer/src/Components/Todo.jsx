import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getTodos } from "../Redux/Todos/action";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";

export const Todo = () => {
  const dispatch = useDispatch();
  const [showTodo, setShowTodo] = useState(false);

  useEffect(() => {
    getTodos(dispatch);
  }, []);

  return (
    <div>
      <TodoInput />
      <button onClick={() => setShowTodo(!showTodo)}>
        {showTodo ? "Hide Todos" : "Show Todos"}
      </button>
      {showTodo ? <TodoList /> : null}
    </div>
  );
};
