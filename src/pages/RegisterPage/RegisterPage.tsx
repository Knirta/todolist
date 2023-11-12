import React from "react";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useAppDispatch } from "../../hooks/hooks";
import { register } from "../../redux/auth/operations";

const RegisterPage = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement)
      .value;

    dispatch(
      register({
        name,
        email,
        password,
      })
    );
    form.reset();
  };

  return (
    <Paper
      elevation={5}
      sx={{ margin: "125px auto 55px", width: "75%", p: "55px" }}
    >
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div>
          <TextField label="Name" name="name" fullWidth margin="normal" />
        </div>
        <div>
          <TextField label="Email" name="email" fullWidth margin="normal" />
        </div>
        <div>
          <TextField
            label="Password"
            name="password"
            type="password"
            fullWidth
            margin="normal"
          />
        </div>
        <Button variant="contained" type="submit" sx={{ mt: "25px" }} fullWidth>
          Sign up
        </Button>
      </form>
    </Paper>
  );
};

export default RegisterPage;
