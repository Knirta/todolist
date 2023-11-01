import Box from "@mui/material/Box";
import List from "@mui/material/List";
import TodoListItem from "../TodoListItem";
import Typography from "@mui/material/Typography";
import { useAppSelector } from "../../hooks/hooks";
import { getTodos } from "../../redux/todos/selectors";
import { getStatusFilter, getTextFilter } from "../../redux/filters/selectors";
import { ITodo } from "../../interfaces/interfaces";
import { statusFilterConst } from "../../redux/filters/constants";

const filterTodosByStatus = (todos: ITodo[], statusFilter: string) => {
  switch (statusFilter) {
    case statusFilterConst.active:
      return todos.filter((todo) => todo.completed === false);
    case statusFilterConst.completed:
      return todos.filter((todo) => todo.completed === true);
    default:
      return todos;
  }
};

const filterTodosByText = (todos: ITodo[], textFilter: string) => {
  if (textFilter) {
    return todos.filter((todo) => {
      const normalizedFilter = textFilter.trim().toLowerCase();
      return todo.text.toLocaleLowerCase().includes(normalizedFilter);
    });
  }
  return todos;
};

const TodoList = () => {
  const { items, isLoading } = useAppSelector(getTodos);
  const statusFilter = useAppSelector(getStatusFilter);
  const textFilter = useAppSelector(getTextFilter);

  const getVisisbleTodos = (todos: ITodo[]) =>
    filterTodosByText(filterTodosByStatus(todos, statusFilter), textFilter);

  const visibleTodos: ITodo[] = getVisisbleTodos(items);

  return (
    <Box sx={{ backgroundColor: "#fff" }}>
      {isLoading && items.length > 0 && <p>Waiting...</p>}
      <List sx={{ width: "100%", maxWidth: 900 }}>
        {visibleTodos.length > 0 ? (
          visibleTodos.map((todo) => <TodoListItem key={todo.id} todo={todo} />)
        ) : (
          <Typography variant="h5">
            there are no{" "}
            {statusFilter === statusFilterConst.all ? "" : statusFilter} todos
          </Typography>
        )}
      </List>
    </Box>
  );
};

export default TodoList;
