import { useAppSelector } from "./hooks";
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectError,
} from "../redux/auth/selectors";

export const useAuth = () => {
  const user = useAppSelector(selectUser);
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const isRefreshing = useAppSelector(selectIsRefreshing);
  const error = useAppSelector(selectError);

  return { user, isLoggedIn, isRefreshing, error };
};
