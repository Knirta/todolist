import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useAppSelector } from "../../hooks/hooks";
import { selectUser } from "../../redux/auth/selectors";
import { useAppDispatch } from "../../hooks/hooks";
import { logOut } from "../../redux/auth/operations";

const UserMenu = () => {
  const dispatch = useAppDispatch();

  const user = useAppSelector(selectUser);

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
