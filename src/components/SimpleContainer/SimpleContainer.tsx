import { ReactNode } from "react";
import Container from "@mui/material/Container";

interface Props {
  children: ReactNode;
}

const SimpleContainer = ({ children }: Props) => {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      {children}
    </Container>
  );
};

export default SimpleContainer;
