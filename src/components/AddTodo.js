import React, { useState, useEffect } from "react";
import useInput from "../hooks/hookInput";
const AddTodo = () => {
  useEffect(() => {
    this.input.focus();
  }, []);
  // let input = null;
  // const {
  //   value: addTodoValue,
  //   bind: addTodoBind,
  //   reset: addTodoReset
  // } = useInput("");
  const { value, bind, reset } = useInput("");
  return (
    <form>
      <input type="text" {...bind} ref={ev => (input = ev)} />
      <button>Add</button>
    </form>
  );
};

export default AddTodo;
