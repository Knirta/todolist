import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import { getTodos } from "../../redux/todos/slice";

const TodosCounter = () => {
  const todos = useSelector(getTodos);

  const count = todos.reduce(
    (acc, todo) => {
      if (todo.isCompleted) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }
      return acc;
    },
    { active: 0, completed: 0 }
  );

  return (
    <Box>
      <Typography variant="subtitle1" sx={{ lineHeight: 1.2 }}>
        {count.active} left
      </Typography>
      <Typography variant="subtitle1" sx={{ lineHeight: 1.2 }}>
        {count.completed} completed
      </Typography>
    </Box>
  );
};

export default TodosCounter;
