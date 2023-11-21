import { LazyExoticComponent } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

interface IProps {
  component: LazyExoticComponent<() => JSX.Element>;
  redirectTo: string;
}

const PrivateRoute = ({ component: Component, redirectTo = "/" }: IProps) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
};

export default PrivateRoute;
