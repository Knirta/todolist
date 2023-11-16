import React from "react";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { logIn } from "../../redux/auth/operations";
import { useAppDispatch } from "../../hooks/hooks";

const LoginPage = () => {
  const dispatch = useAppDispatch();

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
    <Paper
      elevation={7}
      sx={{ margin: "125px auto 55px", width: "75%", p: "55px" }}
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
        <Button type="submit" variant="contained" sx={{ mt: "25px" }} fullWidth>
          Log in
        </Button>
      </form>
    </Paper>
  );
};

export default LoginPage;
