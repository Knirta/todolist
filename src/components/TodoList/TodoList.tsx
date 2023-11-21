import Box from "@mui/material/Box";
import List from "@mui/material/List";
import TodoListItem from "../TodoListItem";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import { useTodos } from "../../hooks/useTodos";
import { useFilter } from "../../hooks/useFilter";
import { statusFilterConst } from "../../redux/filters/constants";

const TodoList = () => {
  const { todos, visibleTodos, isLoading } = useTodos();
  const { statusFilter } = useFilter();

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
          <Typography variant="subtitle1">
            there are no{" "}
            {statusFilter === statusFilterConst.all ? "" : statusFilter} todos
          </Typography>
        )}
      </List>
    </Box>
  );
};

export default TodoList;
