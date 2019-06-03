import React from "react";
import "./styles/main.scss";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
function App() {
  return (
    <>
      <div className="main">
        <AddTodo />
        <TodoList />
      </div>
    </>
  );
}

export default App;
