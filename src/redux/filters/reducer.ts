import { createReducer } from "@reduxjs/toolkit";
import { statusFilterConst } from "./constants";
import { setStatusFilter, setTextFilter } from "./actions";

interface IAction {
  type: string;
  payload: string;
}

interface IState {
  status: string;
  text: string;
}

const filtersInitialState = {
  status: statusFilterConst.all,
  text: "",
};

export const filtersReducer = createReducer(filtersInitialState, {
  [setStatusFilter.type]: (state: IState, action: IAction): void => {
    state.status = action.payload;
  },
  [setTextFilter.type]: (state: IState, action: IAction): void => {
    state.text = action.payload;
  },
});
