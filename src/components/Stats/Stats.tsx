import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface IProps {
  activeTodosAmount: number;
  completedTodosAmount: number;
}

const Stats = ({ activeTodosAmount, completedTodosAmount }: IProps) => (
  <Box>
    <Typography variant="h6">Todos</Typography>
    <Typography variant="subtitle1" sx={{ lineHeight: 1.2 }}>
      {activeTodosAmount} left
    </Typography>
    <Typography variant="subtitle1" sx={{ lineHeight: 1.2 }}>
      {completedTodosAmount} completed
    </Typography>
  </Box>
);

export default Stats;
