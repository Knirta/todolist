import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.tsx";
import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store.ts";
import "@fontsource-variable/urbanist";
import "modern-normalize/modern-normalize.css";
import "./index.css";

const theme = createTheme({
  typography: {
    fontFamily: ["Urbanist Variable", "sans-serif"].join(","),
    fontSize: 22,
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "none",
          backdropFilter: "blur(4px) brightness(0.9)",
        },
      },
    },
  },
  palette: {
    primary: {
      light: "#ECC69F",
      main: "#E4AE76",
      dark: "#DD9D63",
      contrastText: "#fff",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
