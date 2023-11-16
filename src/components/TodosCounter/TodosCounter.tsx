import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useAppSelector } from "../../hooks/hooks";
import { selectCount } from "../../redux/todos/selectors";

const TodosCounter = () => {
  const count = useAppSelector(selectCount);

  return (
    <Box sx={{ mb: { xs: 2, sm: 0 } }}>
      <Typography variant="subtitle2" sx={{ lineHeight: 1.2 }}>
        {count.active} left
      </Typography>
      <Typography variant="subtitle2" sx={{ lineHeight: 1.2 }}>
        {count.completed} completed
      </Typography>
    </Box>
  );
};

export default TodosCounter;
