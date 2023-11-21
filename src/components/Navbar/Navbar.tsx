import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import NavMenu from "../Navmenu";
import AuthMenu from "../AuthMenu";
import UserMenu from "../UserMenu";
import { useAuth } from "../../hooks/useAuth";

function ResponsiveAppBar() {
  const { isLoggedIn } = useAuth();

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ fontSize: "2rem", py: 2 }}>
      <Toolbar disableGutters>
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "flex", md: "none" },
          }}
        >
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            <NavMenu handleCloseNavMenu={handleCloseNavMenu} />
            {isLoggedIn ? (
              <UserMenu />
            ) : (
              <AuthMenu handleCloseNavMenu={handleCloseNavMenu} />
            )}
          </Menu>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "space-between",
            display: { xs: "none", md: "flex" },
          }}
        >
          <NavMenu handleCloseNavMenu={handleCloseNavMenu} />
          {isLoggedIn ? (
            <UserMenu />
          ) : (
            <AuthMenu handleCloseNavMenu={handleCloseNavMenu} />
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
export default ResponsiveAppBar;
