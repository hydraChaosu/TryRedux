import React from "react";

const TodoItem = props => {
  return (
    <li>
      <p>{props.text}</p>
      <button onComplete={props.onComplete}>complete</button>
      <button onRemove={props.onRemove}>remove</button>
    </li>
  );
};

export default TodoItem;
