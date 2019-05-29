import React, { useEffect } from "react";
import useInput from "../hooks/hookInput";
import { connect } from "react-redux";
import actions from "../redux/todo/actions";
const AddTodo = props => {
  let input = null;

  useEffect(() => {
    input.focus();
  }, []);
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
        props.add(value);
      }}
    >
      <input type="text" {...bind} ref={ev => (input = ev)} />
      <button>Add</button>
    </form>
  );
};

const mapDispatchToProps = dispatch => ({
  add: value => dispatch(actions.add(value))
});

export default connect(
  null,
  mapDispatchToProps
)(AddTodo);
