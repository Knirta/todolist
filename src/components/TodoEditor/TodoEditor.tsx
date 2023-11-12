import { useState } from "react";
import { Box, TextField, Button, InputAdornment } from "@mui/material";
import AddTaskIcon from "@mui/icons-material/AddTask";
import { useAppDispatch } from "../../hooks/hooks";
import { addTodo } from "../../redux/todos/operations";

const TodoEditor = () => {
  const dispatch = useAppDispatch();

  const [text, setText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text === "") return;
    dispatch(addTodo(text));
    setText("");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ backgroundColor: "#fff", width: "100%", mt: 15 }}
    >
      <TextField
        variant="standard"
        value={text}
        onChange={handleChange}
        size="medium"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AddTaskIcon />
            </InputAdornment>
          ),
        }}
      />
      <Button type="submit" variant="contained" color="primary">
        Add
      </Button>
    </Box>
  );
};

export default TodoEditor;
