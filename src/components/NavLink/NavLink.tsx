import { NavLink, NavLinkProps } from "react-router-dom";
import styles from "./NavLink.module.css";

const StyledNavLink = ({ children, ...props }: NavLinkProps) => {
  return (
    <NavLink {...props} className={styles.Navlink}>
      {children}
    </NavLink>
  );
};

export default StyledNavLink;
