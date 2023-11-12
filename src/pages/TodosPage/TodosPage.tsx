import { useEffect } from "react";
import TodoEditor from "../../components/TodoEditor";
import TextFilter from "../../components/TextFilter";
import StatusFilter from "../../components/StatusFilter";
import TodoList from "../../components/TodoList";
import TodosCounter from "../../components/TodosCounter";
// import ClearCompletedButton from "../../components/ClearCompletedButton";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import {
  selectError,
  selectIsLoading,
  selectTodos,
} from "../../redux/todos/selectors";
import { fetchTodos } from "../../redux/todos/operations";

const TodosPage = () => {
  const todos = useAppSelector(selectTodos);
  const isLoading = useAppSelector(selectIsLoading);
  const error = useAppSelector(selectError);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <>
      <TodoEditor />
      {isLoading && !error && todos.length == 0 && (
        <p>Request in progress...</p>
      )}
      {error && "error"}
      {todos.length > 0 ? (
        <>
          <TextFilter />
          <TodoList />
          <Box
            sx={{
              position: "sticky",
              bottom: 0,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              background: "none",
              backdropFilter: "blur(6px) brightness(0.85)",
              py: 3,
            }}
          >
            <TodosCounter />
            <StatusFilter />
            {/* <ClearCompletedButton /> */}
          </Box>
        </>
      ) : (
        <Typography variant="subtitle1">Your future plans...</Typography>
      )}
    </>
  );
};

export default TodosPage;
