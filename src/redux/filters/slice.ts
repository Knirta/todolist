import { createSlice } from "@reduxjs/toolkit";
import { statusFilterConst } from "./constants";

const filtersInitialState = {
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
