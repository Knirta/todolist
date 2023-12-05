import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import { logIn } from "../../redux/auth/operations";
import { useAppDispatch } from "../../hooks/hooks";
import { useAuth } from "../../hooks/useAuth";
import { resetError } from "../../redux/auth/slice";
import Slide from "@mui/material/Slide";

import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const LoginPage = () => {
  const { error } = useAuth();

  const dispatch = useAppDispatch();

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (error) {
      setOpen(true);
    }
    return () => {
      dispatch(resetError());
    };
  }, [error, dispatch]);

  const handleClose = (_: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement)
      .value;
    dispatch(
      logIn({
        email,
        password,
      })
    );
    form.reset();
  };

  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        message="Enter your login and password correctly"
        action={action}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        TransitionComponent={Slide}
      />
      <Paper
        elevation={7}
        sx={{
          margin: "125px auto 55px",
          width: { md: "75%", lg: "65%" },
          p: { xs: "10px", sm: "55px" },
        }}
      >
        <form autoComplete="off" onSubmit={handleSubmit}>
          <div>
            <TextField name="email" label="Email" fullWidth margin="normal" />
          </div>
          <div>
            <TextField
              name="password"
              type="password"
              label="Password"
              fullWidth
              margin="normal"
            />
          </div>
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: "25px" }}
            fullWidth
          >
            Log in
          </Button>
        </form>
      </Paper>
    </>
  );
};

export default LoginPage;
