import { ReactNode } from "react";
import Container from "@mui/material/Container";

interface Props {
  children: ReactNode;
}

const SimpleContainer = ({ children }: Props) => {
  return <Container maxWidth="xl">{children}</Container>;
};

export default SimpleContainer;
