import { lazy, useEffect } from "react";
import Layout from "./Layout";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Routes, Route } from "react-router-dom";
import { useAppDispatch } from "../hooks/hooks";
import { fetchCurrentUser } from "../redux/auth/operations";
import { useAuth } from "../hooks/useAuth";
import PrivateRoute from "./PrivateRoute";
import RestrictedRoute from "./RestictedRoute";

const HomePage = lazy(() => import("../pages/HomePage"));
const TodosPage = lazy(() => import("../pages/TodosPage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));

const App = () => {
  const { isRefreshing } = useAuth();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Box sx={{ display: "flex", justifyContent: "center", pt: 15 }}>
      <CircularProgress sx={{ color: "#fff" }} size={80} thickness={5} />
    </Box>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/todos"
          element={<PrivateRoute component={TodosPage} redirectTo="/login" />}
        />
        <Route
          path="/signup"
          element={
            <RestrictedRoute component={RegisterPage} redirectTo="/todos" />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute component={LoginPage} redirectTo="/todos" />
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
