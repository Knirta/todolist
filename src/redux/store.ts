import { createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { todosReducer } from "./todos/reducer";
import { filtersReducer } from "./filter/reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  todos: todosReducer,
  filters: filtersReducer,
});

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);
