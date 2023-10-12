import React, { useState } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import ButtonGroup from "@mui/material/ButtonGroup";
import Checkbox from "@mui/material/Checkbox";
import styles from "./TodoListItem.module.css";
import TextField from "@mui/material/TextField";
import { ITodo } from "../../interfaces/interfaces";
import { useDispatch } from "react-redux";
import {
  editTodo,
  deleteTodo,
  toggleCompleted,
} from "../../redux/todos/actions";

interface IProps {
  todo: ITodo;
}

const TodoListItem = ({ todo: { id, text, isCompleted } }: IProps) => {
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(false);
  const [todoText, setTodoText] = useState(text);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(editTodo(id, todoText));
    setIsEditing(false);
  };

  return (
    <ListItem
      secondaryAction={
        <ButtonGroup>
          <IconButton
            className={styles.IconButton}
            onClick={() => setIsEditing(true)}
            aria-label="edit"
          >
            <EditIcon />
          </IconButton>
          <IconButton
            className={styles.IconButton}
            data-id={id}
            onClick={() => dispatch(deleteTodo(id))}
            aria-label="delete"
          >
            <DeleteIcon />
          </IconButton>
        </ButtonGroup>
      }
    >
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <TextField
            label="Edit todo text, please"
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
          />
        </form>
      ) : (
        <ListItemButton
          role={undefined}
          // id={id}
          onClick={() => dispatch(toggleCompleted(id))}
        >
          <ListItemIcon>
            <Checkbox checked={isCompleted} />
          </ListItemIcon>

          <ListItemText>
            {isCompleted ? <del>{todoText}</del> : todoText}
          </ListItemText>
        </ListItemButton>
      )}
    </ListItem>
  );
};

export default TodoListItem;
