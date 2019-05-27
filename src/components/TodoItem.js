import React from "react";

const TodoItem = ({ text, toggle, remove, completed }) => {
  return (
    <li>
      <p>{text}</p>
      <button onClick={toggle}>{completed ? "uncomplete" : "complete"}</button>
      <button onClick={remove}>remove</button>
    </li>
  );
};

export default TodoItem;
