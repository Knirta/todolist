import { LazyExoticComponent } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

interface IProps {
  component: LazyExoticComponent<() => JSX.Element>;
  redirectTo: string;
}

const RestrictedRoute = ({
  component: Component,
  redirectTo = "/",
}: IProps) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};

export default RestrictedRoute;
