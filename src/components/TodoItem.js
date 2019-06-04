import React from "react";

const TodoItem = ({ text, toggle, remove, completed }) => {
  return (
    <li>
      <p>{text}</p>
      <div className="buttons">
        <button onClick={toggle}>
          {completed ? "uncomplete" : "complete"}
        </button>
        <button onClick={remove}>remove</button>
      </div>
    </li>
  );
};

export default TodoItem;
