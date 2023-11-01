import { RootState } from "../store";

export const selectTextFilter = (state: RootState) => state.filters.text;

export const selectStatusFilter = (state: RootState) => state.filters.status;
