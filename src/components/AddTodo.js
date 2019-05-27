import React, { useState, useEffect } from "react";
import useInput from "../hooks/hookInput";
import { connect } from "react-redux";
import add from "../redux/todo/actions";
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
        if (value === "") return;
        // dispatch(add(value));
      }}
    >
      <input type="text" {...bind} ref={ev => (input = ev)} />
      <button>Add</button>
    </form>
  );
};

export default connect()(AddTodo);
