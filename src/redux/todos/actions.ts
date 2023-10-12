import { nanoid } from "nanoid";

export const addTodo = (text: string) => {
  return {
    type: "todos/addTodo",
    payload: {
      id: nanoid(),
      text,
      isCompleted: false,
    },
  };
};

export const toggleCompleted = (id: string) => {
  return {
    type: "todos/toggleCompleted",
    payload: id,
  };
};

export const editTodo = (id: string, text: string) => {
  return {
    type: "todos/editTodo",
    payload: {
      id,
      text,
    },
  };
};

export const deleteTodo = (id: string) => {
  return {
    type: "todos/deleteTodo",
    payload: id,
  };
};

export const deleteCompletedTodos = () => ({
  type: "todos/deleteCompletedTodos",
});
