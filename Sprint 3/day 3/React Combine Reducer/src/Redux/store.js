import { combineReducers, legacy_createStore } from "redux";
import { authReducer } from "./AuthReducer/reducer";
import { todoReducer } from "./Todos/reducer";

const rootReducer = combineReducers({
  authReducer: authReducer,
  todoReducer: todoReducer,
});

export const store = legacy_createStore(rootReducer);
