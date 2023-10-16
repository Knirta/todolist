import { createAction, nanoid } from "@reduxjs/toolkit";

export const addTodo = createAction("todos/addTodo", (text: string) => ({
  payload: {
    id: nanoid(),
    text,
    isCompleted: false,
  },
}));

export const toggleCompleted = createAction("todos/toggleCompleted");

export const editTodo = createAction("todos/editTodo");

export const deleteTodo = createAction("todos/deleteTodo");

export const deleteCompletedTodos = createAction("todos/deleteCompletedTodos");
