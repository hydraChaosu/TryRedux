import types from "./types";

const INITIAL_STATE = {
  todos: [
    { id: 0, text: "do workaout", completed: false },
    { id: 1, text: "Learn more words in english", completed: true }
  ]
};

const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADD_TODO:
      const newTodo = {
        id: { ...state }.todos[{ ...state }.todos.length - 1].id + 1 || 0,
        text: action.text,
        completed: false
      };
      //   Object.assign({}, state, {
      //     todos: [
      //       ...state.todos,
      //       {
      //         text: action.text,
      //         completed: false
      //       }
      //     ]
      //   });
      return {
        ...state,
        todos: [...state.todos, newTodo]
      };
    case types.TOGGLE_TODO:
      const updatedTodo = { ...state }.todos.map(todo => {
        if (todo.id === action.index) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        ...state,
        todos: updatedTodo
      };
    case types.REMOVE_TODO:
      const removedTodo = { ...state }.todos.filter(todo => {
        if (todo.id !== action.index) return todo;
      });
      return {
        ...state,
        todos: removedTodo
      };
    default:
      return state;
  }
};

export default todoReducer;
