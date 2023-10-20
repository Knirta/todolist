import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ITodo, IState } from "../../interfaces/interfaces";
import { nanoid } from "nanoid";

type TodosState = ITodo[];

const todosInitialState: TodosState = [];

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

export const todosReducer = todosSlice.reducer;

export const {
  addTodo,
  editTodo,
  deleteTodo,
  toggleCompleted,
  deleteCompletedTodos,
} = todosSlice.actions;

export const getTodos = (state: IState) => {
  return state.todos;
};
