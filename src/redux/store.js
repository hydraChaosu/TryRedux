import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import todoReducer from "./todo/index";

const store = createStore(todoReducer, composeWithDevTools());
export default store;
