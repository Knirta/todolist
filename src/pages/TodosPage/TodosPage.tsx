import { useState } from "react";
import TodoEditor from "../../components/TodoEditor";
import Filter from "../../components/Filter";
import StatusFilter from "../../components/StatusFilter";
import TodoList from "../../components/TodoList";
import Stats from "../../components/Stats";
import ClearCompletedButton from "../../components/ClearCompletedButton";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ITodo from "../../interfaces/todo.interface";
import { statusFilterConst } from "../../constants/constants";
import { nanoid } from "nanoid";

const initialTodos: ITodo[] = [
  { id: "sdfsdfs", text: "make a web site", isCompleted: false },
  { id: "sdfsss", text: "go to bed", isCompleted: true },
  { id: "svcxsdbfs", text: "cook a breakfast", isCompleted: false },
  { id: "sdfsssdfs", text: "make a bed", isCompleted: false },
  { id: "sdfjjsss", text: "go to the cinema", isCompleted: true },
  { id: "svcrrxsdbfs", text: "watch TV with friend", isCompleted: false },
  { id: "sdfsvdfs", text: "make a web site", isCompleted: false },
  { id: "sdfsvss", text: "go to bed", isCompleted: true },
  { id: "svcxsvdbfs", text: "cook a breakfast", isCompleted: false },
  { id: "sdfsssvdfs", text: "make a bed", isCompleted: false },
  { id: "sdfjjssvs", text: "go to the cinema", isCompleted: true },
  { id: "svcrrxvsdbfs", text: "watch TV with friend", isCompleted: false },
];

const TodosPage = () => {
  const [todos, setTodos] = useState<ITodo[]>(initialTodos);
  const [statusFilter, setStatusFilter] = useState<string>(
    statusFilterConst.all
  );
  const [textFilter, setTextFilter] = useState("");

  const addTodo = (text: string) => {
    if (text === "") {
      return;
    }
    const newTodo: ITodo = {
      id: nanoid(),
      text,
      isCompleted: false,
    };
    setTodos([newTodo, ...todos]);
  };

  const toggleTodo = (id: string) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });

    setTodos(newTodos);
  };

  const editTodo = (id: string, text: string) => {
    const index = todos.findIndex((todo) => todo.id === id);
    todos[index].text = text;
    setTodos([...todos]);
  };

  const deleteTodo = (id: string) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const deleteCompletedTodos = () => {
    const newTodos = todos.filter((todo) => todo.isCompleted === false);
    setTodos([...newTodos]);
  };

  const handleStatusFilter = (
    e: React.MouseEvent<HTMLElement>,
    newStatus: string
  ) => {
    setStatusFilter(newStatus);
  };

  const filterTodosByStatus = (todos: ITodo[], statusFilter: string) => {
    switch (statusFilter) {
      case statusFilterConst.active:
        return todos.filter((todo) => todo.isCompleted === false);
      case statusFilterConst.completed:
        return todos.filter((todo) => todo.isCompleted === true);
      default:
        return todos;
    }
  };

  const filterTodosByText = (todos: ITodo[], textFilter: string) => {
    if (textFilter) {
      return todos.filter((todo) => {
        const normalizedFilter = textFilter.trim().toLowerCase();
        return todo.text.toLocaleLowerCase().includes(normalizedFilter);
      });
    }
    return todos;
  };

  const getVisisbleTodos = (todos: ITodo[]) =>
    filterTodosByText(filterTodosByStatus(todos, statusFilter), textFilter);

  const visibleTodos: ITodo[] = getVisisbleTodos(todos);

  const activeTodosAmount = todos.filter(
    (todo) => todo.isCompleted === false
  ).length;

  const completedTodosAmount = todos.length - activeTodosAmount;

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          mb: 3,
        }}
      >
        <Stats
          activeTodosAmount={activeTodosAmount}
          completedTodosAmount={completedTodosAmount}
        />
        <StatusFilter
          statusFilter={statusFilter}
          handleStatusFilter={handleStatusFilter}
        />
      </Box>
      <Box>
        <TodoEditor addTodo={addTodo} />
        <Filter
          filter={textFilter}
          onFilterChange={(e) => setTextFilter(e.target.value)}
        />
        <ClearCompletedButton deleteCompletedTodos={deleteCompletedTodos} />
        {todos.length > 0 ? (
          <>
            <TodoList
              todos={visibleTodos}
              toggleTodo={toggleTodo}
              editTodo={editTodo}
              deleteTodo={deleteTodo}
              statusFilter={statusFilter}
            />
          </>
        ) : (
          <Typography variant="subtitle1">Your future plans...</Typography>
        )}
      </Box>
    </>
  );
};

export default TodosPage;
