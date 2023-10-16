import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ITodo } from "../../interfaces/interfaces";
import { nanoid } from "nanoid";

type TodosState = ITodo[];

const todosInitialState: TodosState = [
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

const todosSlice = createSlice({
  name: "todos",
  initialState: todosInitialState,
  reducers: {
    addTodo: {
      reducer(state, action: PayloadAction<ITodo>) {
        return [action.payload, ...state];
      },
      prepare(text: string) {
        return {
          payload: {
            id: nanoid(),
            text,
            isCompleted: false,
          },
        };
      },
    },
    editTodo(state, action: PayloadAction<{ id: string; text: string }>) {
      for (const todo of state) {
        if (todo.id === action.payload.id) {
          todo.text = action.payload.text;
          break;
        }
      }
    },
    deleteTodo(state, action: PayloadAction<string>) {
      const index = state.findIndex((todo) => todo.id === action.payload);
      state.splice(index, 1);
    },
    toggleCompleted(state, action: PayloadAction<string>) {
      for (const todo of state) {
        if (todo.id === action.payload) {
          todo.isCompleted = !todo.isCompleted;
          break;
        }
      }
    },
    deleteCompletedTodos(state) {
      return state.filter((todo) => todo.isCompleted === false);
    },
  },
});

export const {
  addTodo,
  editTodo,
  deleteTodo,
  toggleCompleted,
  deleteCompletedTodos,
} = todosSlice.actions;

export const todosReducer = todosSlice.reducer;
