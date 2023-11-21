import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useAuth } from "../../hooks/useAuth";
import { useAppDispatch } from "../../hooks/hooks";
import { logOut } from "../../redux/auth/operations";

const UserMenu = () => {
  const dispatch = useAppDispatch();

  const { user } = useAuth();

  const handleClick = () => {
    dispatch(logOut());
  };
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Typography variant="inherit" noWrap sx={{ mr: 4, maxWidth: "550px" }}>
        Hello, {user.name}!
      </Typography>
      <Button
        disableRipple
        sx={{
          color: "inherit",
          fontSize: "inherit",
          "&:hover": {
            background: "unset",
          },
        }}
        onClick={handleClick}
      >
        Log Out
      </Button>
    </Box>
  );
};

export default UserMenu;
