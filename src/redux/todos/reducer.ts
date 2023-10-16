import { createReducer } from "@reduxjs/toolkit";
import { ITodo } from "../../interfaces/interfaces";

import {
  addTodo,
  editTodo,
  deleteTodo,
  toggleCompleted,
  deleteCompletedTodos,
} from "./actions";

enum ActionTypes {
  add = "todos/addTodo",
  toggle = "todos/toggleCompleted",
  edit = "todos/editTodo",
  delete = "todos/deleteTodo",
  deleteAll = "todos/deleteCompletedTodos",
}

interface IActionAdd {
  type: ActionTypes.add;
  payload: { id: string; text: string; isCompleted: boolean };
}

interface IActionToggle {
  type: ActionTypes.toggle;
  payload: string;
}

interface IActionEdit {
  type: ActionTypes.edit;
  payload: { id: string; text: string };
}

interface IActionDelete {
  type: ActionTypes.delete;
  payload: string;
}

const todosInitialState = [
  { id: "sdfsdfs", text: "make a web site", isCompleted: false },
  { id: "sdfsss", text: "go to bed", isCompleted: true },
  { id: "svcxsdbfs", text: "cook a breakfast", isCompleted: false },
  { id: "sdfsssdfs", text: "make a bed", isCompleted: false },
  { id: "sdfjjsss", text: "go to the cinema", isCompleted: true },
  { id: "svcrrxsdbfs", text: "watch TV with friend", isCompleted: false },
  { id: "sdfsvdfs", text: "make a web site", isCompleted: false },
  { id: "sdfsvss", text: "go to bed", isCompleted: true },
  { id: "svcxsvdbfs", text: "cook a breakfast", isCompleted: false },
  { id: "sdfsssvdfs", text: "make a bed", isCompleted: false },
  { id: "sdfjjssvs", text: "go to the cinema", isCompleted: true },
  { id: "svcrrxvsdbfs", text: "watch TV with friend", isCompleted: false },
];

export const todosReducer = createReducer(todosInitialState, {
  [addTodo.type]: (state, action: IActionAdd): ITodo[] => [
    action.payload,
    ...state,
  ],
  [editTodo.type]: (state, action: IActionEdit): void => {
    for (const todo of state) {
      if (todo.id === action.payload.id) {
        todo.text = action.payload.text;
        break;
      }
    }
  },
  [deleteTodo.type]: (state, action: IActionDelete): void => {
    const idx = state.findIndex((todo) => todo.id === action.payload);
    state.splice(idx, 1);
  },
  [toggleCompleted.type]: (state, action: IActionToggle): void => {
    for (const todo of state) {
      if (todo.id === action.payload) {
        todo.isCompleted = !todo.isCompleted;
        break;
      }
    }
  },
  [deleteCompletedTodos.type]: (state): ITodo[] => {
    return state.filter((todo) => todo.isCompleted === false);
  },
});
