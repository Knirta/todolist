import { useEffect } from "react";
import TodoEditor from "../../components/TodoEditor";
import TextFilter from "../../components/TextFilter";
import StatusFilter from "../../components/StatusFilter";
import TodoList from "../../components/TodoList";
import TodosCounter from "../../components/TodosCounter";
// import ClearCompletedButton from "../../components/ClearCompletedButton";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import CircularProgress from "@mui/material/CircularProgress";
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
      {isLoading && !error && todos.length === 0 && (
        <Box sx={{ display: "flex", justifyContent: "center", pt: 15 }}>
          <CircularProgress sx={{ color: "#fff" }} size={80} thickness={5} />
        </Box>
      )}
      {/* {error && <Typography color="red">error</Typography>} */}
      {todos.length > 0 ? (
        <>
          <Paper elevation={7} sx={{ p: 1 }}>
            <TextFilter />
            <TodoList />

            <Box
              sx={{
                display: { xs: "block", sm: "flex" },
                justifyContent: "space-between",
                alignItems: "flex-end",
                position: "sticky",
                bottom: 0,
                px: 2,
                py: 3,
                backgroundColor: "#fff",
              }}
            >
              <TodosCounter />
              <StatusFilter />
              {/* <ClearCompletedButton /> */}
            </Box>
          </Paper>
        </>
      ) : (
        <Typography variant="h6" color="#fff">
          Your future plans...
        </Typography>
      )}
    </>
  );
};

export default TodosPage;
