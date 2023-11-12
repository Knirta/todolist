import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import StyledNavLink from "../NavLink";

interface IProps {
  handleCloseNavMenu: () => void;
}

const NavMenu = ({ handleCloseNavMenu }: IProps) => {
  return (
    <>
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <MenuItem onClick={handleCloseNavMenu}>
          <StyledNavLink to="/" end>
            Home
          </StyledNavLink>
        </MenuItem>
        <MenuItem onClick={handleCloseNavMenu}>
          <StyledNavLink to="/todos" end>
            Todos
          </StyledNavLink>
        </MenuItem>
      </Box>

      <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
        <StyledNavLink to="/" end onClick={handleCloseNavMenu}>
          Home
        </StyledNavLink>
        <StyledNavLink to="/todos" end onClick={handleCloseNavMenu}>
          Todos
        </StyledNavLink>
      </Box>
    </>
  );
};

export default NavMenu;
