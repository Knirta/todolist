import { useState } from "react";
import { Box, TextField, Button, InputAdornment } from "@mui/material";
import AddTaskIcon from "@mui/icons-material/AddTask";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/todos/slice";

const TodoEditor = () => {
  const dispatch = useDispatch();

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
      sx={{ backgroundColor: "#fff", width: "100%" }}
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
      <Button type="submit">Add</Button>
    </Box>
  );
};

export default TodoEditor;
