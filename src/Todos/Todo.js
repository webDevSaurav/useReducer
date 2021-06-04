import React from "react";
import { ACTIONS } from "./Todos";

const Todo = ({ todo, dispatch }) => {
  const toggleHandler = () => {
    dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } });
  };
  const deleteHandler = () => {
    dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } });
  };
  return (
    <p style={{ color: todo.completed ? "#ccc" : "#000" }}>
      {todo.value}
      <button onClick={toggleHandler}>Toggle</button>
      <button onClick={deleteHandler}>X</button>
    </p>
  );
};

export default Todo;
