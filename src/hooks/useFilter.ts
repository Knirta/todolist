import { useAppSelector } from "./hooks";
import {
  selectTextFilter,
  selectStatusFilter,
} from "../redux/filters/selectors";

export const useFilter = () => {
  const textFilter = useAppSelector(selectTextFilter);
  const statusFilter = useAppSelector(selectStatusFilter);

  return { textFilter, statusFilter };
};
