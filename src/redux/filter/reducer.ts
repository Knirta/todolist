import { statusFilterConst } from "./constants";

interface IAction {
  type: string;
  payload: string;
}

const filtersInitialState = {
  status: statusFilterConst.all,
  text: "",
};

export const filtersReducer = (
  state = filtersInitialState,
  { type, payload }: IAction
) => {
  switch (type) {
    case "filters/setStatusFilter":
      return { ...state, status: payload };
    case "filters/setTextFilter":
      return { ...state, text: payload };
    default:
      return state;
  }
};
