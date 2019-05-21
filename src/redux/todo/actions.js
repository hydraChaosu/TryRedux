import types from "./types";

const add = item => ({ type: types.ADD_TODO, item });
const remove = item => ({ type: types.REMOVE_TODO, item });
const complete = item => ({ type: types.COMPLETE_TODO, item });
