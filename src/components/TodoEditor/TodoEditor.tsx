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
      sx={{
        display: { xs: "block", sm: "flex" },
        justifyContent: "space-between",
        width: "100%",
        my: 6,
        p: 1,
        borderRadius: 1,
        backgroundColor: "#fff",
        boxShadow:
          "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
      }}
    >
      <TextField
        variant="outlined"
        value={text}
        placeholder="write todo..."
        onChange={handleChange}
        size="medium"
        sx={{
          flexGrow: 1,
          mr: { sm: 1 },
          mb: { xs: 1, sm: 0 },
          width: { xs: "100%", sm: "auto" },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AddTaskIcon color="primary" />
            </InputAdornment>
          ),
        }}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ px: 9, width: { xs: "100%", sm: "auto" } }}
      >
        Add
      </Button>
    </Box>
  );
};

export default TodoEditor;
