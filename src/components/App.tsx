import { useEffect } from "react";
import Layout from "./Layout";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import HomePage from "../pages/HomePage";
import TodosPage from "../pages/TodosPage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import { Routes, Route } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { fetchCurrentUser } from "../redux/auth/operations";
import { selectIsRefreshing } from "../redux/auth/selectors";

const App = () => {
  const isRefreshing = useAppSelector(selectIsRefreshing);
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
        <Route path="/todos" element={<TodosPage />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
};

export default App;
