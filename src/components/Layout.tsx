import SimpleContainer from "./SimpleContainer";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";

const Layout = () => {
  return (
    <SimpleContainer>
      <Navbar />
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </SimpleContainer>
  );
};

export default Layout;
