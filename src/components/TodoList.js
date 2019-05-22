import React from "react";
import TodoItem from "./TodoItem";
const TodoList = props => {
  return (
    <ul>
      {/* {props.todos.map(todo => (
        <TodoItem
          key={props.id}
          text={props.text}
          onComplete={id => this.onComplete(id)}
          onRemove={id => this.onRemove(id)}
        />
      ))} */}
    </ul>
  );
};

export default TodoList;
