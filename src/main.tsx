import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createTheme, ThemeProvider } from "@mui/material";
import "@fontsource-variable/urbanist";
import "modern-normalize/modern-normalize.css";
import "./index.css";

const theme = createTheme({
  typography: {
    fontFamily: ["Urbanist Variable", "sans-serif"].join(","),
    fontSize: 22,
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
