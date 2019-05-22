import types from "./types";
import { bindActionCreators } from "redux";
import store from "../store";

const add = text => ({ type: types.ADD_TODO, text });
const remove = index => ({ type: types.REMOVE_TODO, index });
const complete = index => ({ type: types.COMPLETE_TODO, index });

// const boundAdd = bindActionCreators({ add }, store.dispatch);
// const boundRemove = bindActionCreators({ remove }, store.dispatch);
// const boundComplete = bindActionCreators({ complete }, store.dispatch);
export default {
  add,
  remove,
  complete
  // boundAdd,
  // boundComplete,
  // boundRemove
};
