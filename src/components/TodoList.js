import React, { useEffect } from "react";
import TodoItem from "./TodoItem";
import { connect } from "react-redux";
import actions from "../redux/todo/actions";
const TodoList = ({ todos, kupatoggle, remove }) => {
  let uncompletedTasks = [...todos].filter(todo => {
    if (todo.completed === false) return todo;
  });

  let completedTasks = [...todos].filter(todo => {
    if (todo.completed === true) return todo;
  });

  uncompletedTasks = uncompletedTasks.map(todo => (
    <TodoItem
      key={todo.id}
      id={todo.id}
      text={todo.text}
      completed={todo.completed}
      remove={() => remove(todo.id)}
      toggle={() => kupatoggle(todo.id)}
    />
  ));

  completedTasks = completedTasks.map(todo => (
    <TodoItem
      key={todo.id}
      id={todo.id}
      text={todo.text}
      completed={todo.completed}
      remove={() => remove(todo.id)}
      toggle={() => kupatoggle(todo.id)}
    />
  ));

  useEffect(() => {
    return () => {};
  }, []);
  return (
    <>
      <p>
        {uncompletedTasks.length === 0
          ? ""
          : uncompletedTasks > 2
          ? `Uncompleted ${uncompletedTasks.length} tasks`
          : `Uncompleted ${uncompletedTasks.length} task`}
      </p>
      <ul>{uncompletedTasks}</ul>
      <p>
        {completedTasks.length === 0
          ? ""
          : completedTasks > 2
          ? `Completed ${completedTasks.length} tasks`
          : `Completed ${completedTasks.length} task`}
      </p>
      <ul>{completedTasks}</ul>
    </>
  );
};

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  kupatoggle: id => dispatch(actions.toggle(id)),
  remove: id => dispatch(actions.remove(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
