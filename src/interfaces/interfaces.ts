export interface ITodo {
  id: string;
  text: string;
  isCompleted: boolean;
}

export interface IState {
  todos: ITodo[];
  filters: {
    status: string;
    text: string;
  };
}
