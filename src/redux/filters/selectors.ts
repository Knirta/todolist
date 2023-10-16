import { IState } from "../../interfaces/interfaces";

export const getTextFilter = (state: IState) => state.filters.text;

export const getStatusFilter = (state: IState) => state.filters.status;
