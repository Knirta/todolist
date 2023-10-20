import { createSlice } from "@reduxjs/toolkit";
import { statusFilterConst } from "./constants";
import { IState } from "../../interfaces/interfaces";

type filterStatusType =
  (typeof statusFilterConst)[keyof typeof statusFilterConst]; // "all" | "active" | "completed"

interface IFilterstate {
  status: filterStatusType;
  text: string;
}

const filtersInitialState: IFilterstate = {
  status: statusFilterConst.all,
  text: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    setStatusFilter(state, action) {
      state.status = action.payload;
    },
    setTextFilter(state, action) {
      state.text = action.payload;
    },
  },
});

export const { setStatusFilter, setTextFilter } = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;

export const getTextFilter = (state: IState) => state.filters.text;

export const getStatusFilter = (state: IState) => state.filters.status;
