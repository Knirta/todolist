import { ReactNode } from "react";
import Container from "@mui/material/Container";

interface Props {
  children: ReactNode;
}

const SimpleContainer = ({ children }: Props) => {
  return (
    <Container maxWidth="lg" sx={{ pt: 9 }}>
      {children}
    </Container>
  );
};

export default SimpleContainer;
