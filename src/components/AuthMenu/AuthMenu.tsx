import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import StyledNavLink from "../NavLink";

interface IProps {
  handleCloseNavMenu: () => void;
}

const AuthMenu = ({ handleCloseNavMenu }: IProps) => {
  return (
    <>
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <MenuItem onClick={handleCloseNavMenu}>
          <StyledNavLink to="signup" end>
            Sigh up
          </StyledNavLink>
        </MenuItem>
        <MenuItem onClick={handleCloseNavMenu}>
          <StyledNavLink to="/login" end>
            Log in
          </StyledNavLink>
        </MenuItem>
      </Box>
      <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
        <StyledNavLink to="/signup" end onClick={handleCloseNavMenu}>
          Sign up
        </StyledNavLink>
        <StyledNavLink to="/login" end onClick={handleCloseNavMenu}>
          Log in
        </StyledNavLink>
      </Box>
    </>
  );
};

export default AuthMenu;
