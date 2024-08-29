import { Outlet } from "react-router-dom";
import { TopHeader } from "../TopHeader";
import { Footer } from "../Footer";

export const AppLayout = () => {
  return (
    <>
      <TopHeader />
      <Outlet />
      <Footer />
    </>
  );
};
