import React, { useState, useEffect } from "react";
import useInput from "../hooks/hookInput";
const AddTodo = () => {
  useEffect(() => {
    input.focus();
  }, []);
  let input = null;
  // const {
  //   value: addTodoValue,
  //   bind: addTodoBind,
  //   reset: addTodoReset
  // } = useInput("");
  const { value, bind, reset } = useInput("");
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        reset();
      }}
    >
      <input type="text" {...bind} ref={ev => (input = ev)} />
      <button>Add</button>
    </form>
  );
};

export default AddTodo;
