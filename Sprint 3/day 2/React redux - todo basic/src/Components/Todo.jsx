import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTodos } from "../Redux/action";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";

export const Todo = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getTodos(dispatch);
  }, []);

  return (
    <div>
      <TodoInput />
      <TodoList />
    </div>
  );
};

