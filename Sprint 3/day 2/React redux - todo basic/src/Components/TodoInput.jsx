import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodos, getTodos } from "../Redux/action";

export const TodoInput = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleTodo = () => {
    // console.log(text);
    addTodos({
      title: text,
      dispatch,
    }).then(() => {
        getTodos(dispatch)
    })
  };
  return (
    <div>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <button onClick={handleTodo}>Add Todo</button>
    </div>
  );
};

