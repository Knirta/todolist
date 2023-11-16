import Box from "@mui/material/Box";
import List from "@mui/material/List";
import TodoListItem from "../TodoListItem";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import { useAppSelector } from "../../hooks/hooks";
import {
  selectTodos,
  selectIsLoading,
  selectVisibleTodos,
} from "../../redux/todos/selectors";
import { selectStatusFilter } from "../../redux/filters/selectors";
import { statusFilterConst } from "../../redux/filters/constants";

const TodoList = () => {
  const todos = useAppSelector(selectTodos);
  const isLoading = useAppSelector(selectIsLoading);
  const statusFilter = useAppSelector(selectStatusFilter);
  const visibleTodos = useAppSelector(selectVisibleTodos);

  return (
    <Box>
      {isLoading && todos.length > 0 && (
        <Box sx={{ display: "flex", justifyContent: "center", pt: 7 }}>
          <CircularProgress color="primary" size={40} thickness={4} />
        </Box>
      )}
      <List sx={{ width: "100%" }}>
        {visibleTodos.length > 0 ? (
          visibleTodos.map((todo) => <TodoListItem key={todo.id} todo={todo} />)
        ) : (
          <Typography variant="h6">
            there are no{" "}
            {statusFilter === statusFilterConst.all ? "" : statusFilter} todos
          </Typography>
        )}
      </List>
    </Box>
  );
};

export default TodoList;
