import Box from "@mui/material/Box";
import List from "@mui/material/List";
import TodoListItem from "../TodoListItem";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { getTodos } from "../../redux/todos/selectors";
import { getStatusFilter, getTextFilter } from "../../redux/filter/selectors";
import { ITodo } from "../../interfaces/interfaces";
import { statusFilterConst } from "../../redux/filter/constants";

const filterTodosByStatus = (todos: ITodo[], statusFilter: string) => {
  switch (statusFilter) {
    case statusFilterConst.active:
      return todos.filter((todo) => todo.isCompleted === false);
    case statusFilterConst.completed:
      return todos.filter((todo) => todo.isCompleted === true);
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
  const todos = useSelector(getTodos);
  const statusFilter = useSelector(getStatusFilter);
  const textFilter = useSelector(getTextFilter);

  const getVisisbleTodos = (todos: ITodo[]) =>
    filterTodosByText(filterTodosByStatus(todos, statusFilter), textFilter);

  const visibleTodos: ITodo[] = getVisisbleTodos(todos);

  return (
    <Box sx={{ backgroundColor: "#fff"}}>
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
