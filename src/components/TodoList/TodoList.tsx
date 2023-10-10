import Box from "@mui/material/Box";
import List from "@mui/material/List";
import TodoListItem from "../TodoListItem";
import ITodo from "../../interfaces/todo.interface";
import Typography from "@mui/material/Typography";

interface IProps {
  todos: ITodo[];
  toggleTodo: (id: string) => void;
  editTodo: (id: string, text: string) => void;
  deleteTodo: (id: string) => void;
  statusFilter: string;
}

const TodoList = ({
  todos,
  toggleTodo,
  editTodo,
  deleteTodo,
  statusFilter,
}: IProps) => {
  return (
    <Box sx={{ backgroundColor: "#fff" }}>
      <List sx={{ width: "100%", maxWidth: 900 }}>
        {todos.length > 0 ? (
          todos.map((todo) => (
            <TodoListItem
              key={todo.id}
              todo={todo}
              toggleTodo={toggleTodo}
              editTodo={editTodo}
              deleteTodo={deleteTodo}
            />
          ))
        ) : (
          <Typography variant="h5">
            there are no {statusFilter} todos
          </Typography>
        )}
      </List>
    </Box>
  );
};

export default TodoList;
