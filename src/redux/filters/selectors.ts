import { RootState } from "../store";

export const getTextFilter = (state: RootState) => state.filters.text;

export const getStatusFilter = (state: RootState) => state.filters.status;
