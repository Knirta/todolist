import Button from "@mui/material/Button";

interface IProps {
  deleteCompletedTodos: () => void;
}

const ClearCompletedButton = ({ deleteCompletedTodos }: IProps) => (
  <Button onClick={deleteCompletedTodos}>Clear Completed</Button>
);

export default ClearCompletedButton;
