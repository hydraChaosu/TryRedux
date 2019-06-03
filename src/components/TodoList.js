import React, { useEffect } from "react";
import TodoItem from "./TodoItem";
import { connect } from "react-redux";
import actions from "../redux/todo/actions";
// import getTodo from "../redux/todo/operations";

const TodoList = ({ todos, kupatoggle, remove, add }) => {
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

  async function fetchTodos() {
    try {
      let fetchedTodos = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      )
        .then(response => response.json())
        .then(data => data.slice(0, 10));
      fetchedTodos.map(todo => add(todo.title));
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    // getTodo();
    fetchTodos();
  }, []);
  return (
    <div className="list">
      <p>
        {uncompletedTasks.length >= 2
          ? `Uncompleted ${uncompletedTasks.length} tasks`
          : uncompletedTasks.length === 0
          ? ""
          : `Uncompleted ${uncompletedTasks.length} task`}
      </p>
      <ul>{uncompletedTasks}</ul>
      <p>
        {completedTasks.length === 0
          ? ""
          : completedTasks.length >= 2
          ? `Completed ${completedTasks.length} tasks`
          : `Completed ${completedTasks.length} task`}
      </p>
      <ul>{completedTasks}</ul>
    </div>
  );
};

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  kupatoggle: id => dispatch(actions.toggle(id)),
  remove: id => dispatch(actions.remove(id)),
  add: value => dispatch(actions.add(value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
