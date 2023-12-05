import React, { useState } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ClearIcon from "@mui/icons-material/Clear";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import ButtonGroup from "@mui/material/ButtonGroup";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import type { ITodo } from "../../interfaces/interfaces";
import { useAppDispatch } from "../../hooks/hooks";
import {
  deleteTodo,
  toggleCompleted,
  editTodo,
} from "../../redux/todos/operations";
import { Typography } from "@mui/material";

interface IProps {
  todo: ITodo;
}

const TodoListItem = ({ todo: { id, text, completed } }: IProps) => {
  const dispatch = useAppDispatch();

  const [isEditing, setIsEditing] = useState(false);
  const [todoText, setTodoText] = useState(text);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(editTodo({ id, text: todoText }));
    setIsEditing(false);
  };

  return (
    <ListItem
      sx={{ pr: 2 }}
      secondaryAction={
        <ButtonGroup>
          <IconButton onClick={() => setIsEditing(true)} aria-label="edit">
            <EditIcon color="primary" />
          </IconButton>
          <IconButton
            data-id={id}
            onClick={() => dispatch(deleteTodo(id))}
            aria-label="delete"
          >
            <ClearIcon color="primary" />
          </IconButton>
        </ButtonGroup>
      }
    >
      {isEditing ? (
        <form onSubmit={handleSubmit} style={{ width: "85%" }}>
          <TextField
            label="Edit todo text, please"
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
            sx={{ width: { xs: "85%", sm: "100%" } }}
          />
        </form>
      ) : (
        <ListItemButton
          role={undefined}
          id={id}
          onClick={() => dispatch(toggleCompleted({ id, completed }))}
        >
          <ListItemIcon>
            <Checkbox checked={completed} />
          </ListItemIcon>

          <ListItemText sx={{ pr: 12 }}>
            <Typography>
              {completed ? <del>{todoText}</del> : todoText}
            </Typography>
          </ListItemText>
        </ListItemButton>
      )}
    </ListItem>
  );
};

export default TodoListItem;
