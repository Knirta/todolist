import { NavLink, NavLinkProps } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { CSSProperties } from "react";

const StyledNavLink = ({ children, ...props }: NavLinkProps) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  const queryStyle = matches ? { color: "#fff" } : { color: "#000" };

  const style: CSSProperties = {
    textDecoration: "none",
    display: "inline-block",
    textTransform: "uppercase",
    margin: "0 20px",
    ...queryStyle,
  };

  return (
    <NavLink
      {...props}
      style={({ isActive }) => ({ ...style, fontWeight: isActive ? 700 : "" })}
    >
      {children}
    </NavLink>
  );
};

export default StyledNavLink;
