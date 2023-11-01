import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { selectStatusFilter, selectTextFilter } from "../filters/selectors";
import { ITodo } from "../../interfaces/interfaces";
import { statusFilterConst } from "../../redux/filters/constants";

export const selectTodos = (state: RootState) => state.todos.items;
export const selectIsLoading = (state: RootState) => state.todos.isLoading;
export const selectError = (state: RootState) => state.todos.error;

export const selectVisibleTodos = createSelector(
  [selectTodos, selectStatusFilter, selectTextFilter],
  (todos, statusFilter, textFilter) => {
    let filteredByStatus: ITodo[] = [];
    switch (statusFilter) {
      case statusFilterConst.active:
        filteredByStatus = todos.filter((todo) => todo.completed === false);
        break;
      case statusFilterConst.completed:
        filteredByStatus = todos.filter((todo) => todo.completed === true);
        break;
      default:
        filteredByStatus = todos;
        break;
    }
    if (textFilter) {
      return filteredByStatus.filter((todo) => {
        const normalizedFilter = textFilter.trim().toLowerCase();
        return todo.text.toLocaleLowerCase().includes(normalizedFilter);
      });
    }
    return filteredByStatus;
  }
);

export const selectCount = createSelector([selectTodos], (todos) => {
  return todos.reduce(
    (acc, todo) => {
      if (todo.completed) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }
      return acc;
    },
    { active: 0, completed: 0 }
  );
});
