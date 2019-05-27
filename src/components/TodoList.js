import React from "react";
import TodoItem from "./TodoItem";
import { connect } from "react-redux";
import actions from "../redux/todo/actions";
const TodoList = ({ todos, toggle, remove }) => {
  const adolf = id => {
    console.log(id);
  };
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          completed={todo.completed}
          remove={({ id }) => adolf(todo.id)}
          toggle={id => toggle(todo.id)}
        />
      ))}
    </ul>
  );
};

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  toggle: id => dispatch(actions.toggle(id)),
  remove: id => dispatch(actions.remove(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
