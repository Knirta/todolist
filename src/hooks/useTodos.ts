import { useAppSelector } from "./hooks";
import {
  selectTodos,
  selectIsLoading,
  selectVisibleTodos,
  selectError,
  selectCount,
} from "../redux/todos/selectors";

export const useTodos = () => {
  const todos = useAppSelector(selectTodos);
  const visibleTodos = useAppSelector(selectVisibleTodos);
  const isLoading = useAppSelector(selectIsLoading);
  const error = useAppSelector(selectError);
  const count = useAppSelector(selectCount);

  return { todos, visibleTodos, isLoading, error, count };
};
