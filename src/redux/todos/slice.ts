import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ITodo } from "../../interfaces/interfaces";
import {
  fetchTodos,
  addTodo,
  deleteTodo,
  toggleCompleted,
  editTodo,
} from "./operations";
import { logOut } from "../auth/operations";

interface ITodosState {
  items: ITodo[];
  error: string | null;
  isLoading: boolean;
}

const todosInitialState: ITodosState = {
  items: [],
  error: null,
  isLoading: false,
};

const handlePending = (state: ITodosState) => {
  state.isLoading = true;
};

const handleRejected = (
  state: ITodosState,
  action: PayloadAction<unknown, string>
) => {
  state.error = action.payload as string;
  state.isLoading = false;
};

const todosSlice = createSlice({
  name: "todos",
  initialState: todosInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, handlePending)
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchTodos.rejected, handleRejected)
      .addCase(addTodo.pending, handlePending)
      .addCase(addTodo.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addTodo.rejected, handleRejected)
      .addCase(editTodo.pending, handlePending)
      .addCase(editTodo.fulfilled, (state, action) => {
        for (const todo of state.items) {
          if (todo.id === action.payload.id) {
            todo.text = action.payload.text;
          }
          break;
        }
        state.isLoading = false;
        state.error = null;
      })
      .addCase(editTodo.rejected, handleRejected)
      .addCase(deleteTodo.pending, handlePending)
      .addCase(deleteTodo.fulfilled, (state, action) => {
        const idx = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        state.items.splice(idx, 1);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteTodo.rejected, handleRejected)
      .addCase(toggleCompleted.pending, handlePending)
      .addCase(toggleCompleted.fulfilled, (state, action) => {
        const idx = state.items.findIndex(
          (todo) => todo.id === action.payload.id
        );
        state.items.splice(idx, 1, action.payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(toggleCompleted.rejected, handleRejected)
      .addCase(logOut.fulfilled, (state) => {
        state.items = [];
        state.error = null;
        state.isLoading = false;
      });
  },
});

export const todosReducer = todosSlice.reducer;
