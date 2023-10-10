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
import ITodo from "../../interfaces/todo.interface";

interface IProps {
  todo: ITodo;
  toggleTodo: (id: string) => void;
  editTodo: (id: string, text: string) => void;
  deleteTodo: (id: string) => void;
}

const TodoListItem = ({
  todo: { id, text, isCompleted },
  toggleTodo,
  editTodo,
  deleteTodo,
}: IProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [todoText, setTodoText] = useState(text);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsEditing(false);
    editTodo(e.currentTarget.dataset.id!, todoText);
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
            onClick={(e) => deleteTodo(e.currentTarget.dataset.id!)}
            aria-label="delete"
          >
            <DeleteIcon />
          </IconButton>
        </ButtonGroup>
      }
    >
      {isEditing ? (
        <form onSubmit={handleSubmit} data-id={id}>
          <TextField
            label="Edit todo text, please"
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
          />
        </form>
      ) : (
        <ListItemButton
          role={undefined}
          id={id}
          onClick={(e) => toggleTodo(e.currentTarget.id)}
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
