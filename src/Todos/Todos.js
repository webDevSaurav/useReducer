import React, { useState, useReducer } from "react";
import Todo from "./Todo";

export const ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete-todo",
};

const addTodo = (name) => {
  return {
    id: Date.now(),
    completed: false,
    value: name,
  };
};

const reduce = (todos, actions) => {
  switch (actions.type) {
    case ACTIONS.ADD_TODOS:
      return [...todos, addTodo(actions.payload.name)];
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === actions.payload.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== actions.payload.id);
    default:
      return todos;
  }
};

const Todos = () => {
  const [todos, dispatch] = useReducer(reduce, []);
  const [name, setName] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODOS, payload: { name } });
    setName("");
  };

  console.log(todos);
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input onChange={(e) => setName(e.target.value)} value={name} />
        <input type="submit" value="ADD" />
      </form>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
    </div>
  );
};

export default Todos;
