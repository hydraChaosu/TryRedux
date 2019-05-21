import types from "./types";
i;

const add = text => ({ type: types.ADD_TODO, text });
const remove = index => ({ type: types.REMOVE_TODO, index });
const complete = index => ({ type: types.COMPLETE_TODO, index });

const boundAdd = dispatch(add(text));
const boundRemove = dispatch(remove(index));
const boundComplete = dispatch(complete(index));
export default {
  add,
  remove,
  complete,
  boundAdd,
  boundComplete,
  boundRemove
};
