import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import StyledNavLink from "../NavLink";
import { useAuth } from "../../hooks/useAuth";

interface IProps {
  handleCloseNavMenu: () => void;
}

const NavMenu = ({ handleCloseNavMenu }: IProps) => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <MenuItem onClick={handleCloseNavMenu}>
          <StyledNavLink to="/" end>
            Home
          </StyledNavLink>
        </MenuItem>
        {isLoggedIn && (
          <MenuItem onClick={handleCloseNavMenu}>
            <StyledNavLink to="/todos" end>
              Todos
            </StyledNavLink>
          </MenuItem>
        )}
      </Box>

      <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
        <StyledNavLink to="/" end onClick={handleCloseNavMenu}>
          Home
        </StyledNavLink>
        {isLoggedIn && (
          <StyledNavLink to="/todos" end onClick={handleCloseNavMenu}>
            Todos
          </StyledNavLink>
        )}
      </Box>
    </>
  );
};

export default NavMenu;
