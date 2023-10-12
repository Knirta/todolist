enum ActionTypes {
  add = "todos/addTodo",
  toggle = "todos/toggleCompleted",
  edit = "todos/editTodo",
  delete = "todos/deleteTodo",
  deleteAll = "todos/deleteCompletedTodos",
}

interface IActionAdd {
  type: ActionTypes.add;
  payload: { id: string; text: string; isComplete: boolean };
}

interface IActionToggle {
  type: ActionTypes.toggle;
  payload: string;
}

interface IActionEdit {
  type: ActionTypes.edit;
  payload: { id: string; text: string };
}

interface IActionDelete {
  type: ActionTypes.delete;
  payload: string;
}

interface IActionDeleteCompleted {
  type: ActionTypes.deleteAll;
  payload?: unknown;
}

type IAction =
  | IActionAdd
  | IActionToggle
  | IActionEdit
  | IActionDelete
  | IActionDeleteCompleted;

const todosInitialState = [
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

export const todosReducer = (
  state = todosInitialState,
  { type, payload }: IAction
) => {
  switch (type) {
    case "todos/addTodo":
      return [payload, ...state];
    case "todos/toggleCompleted":
      return state.map((todo) => {
        if (todo.id === payload) {
          todo.isCompleted = !todo.isCompleted;
        }
        return todo;
      });
    case "todos/editTodo": {
      const index = state.findIndex((todo) => todo.id === payload.id);
      state[index].text = payload.text;
      return [...state];
    }
    case "todos/deleteTodo":
      return state.filter((todo) => todo.id !== payload);
    case "todos/deleteCompletedTodos":
      return state.filter((todo) => todo.isCompleted === false);
    default:
      return state;
  }
};
