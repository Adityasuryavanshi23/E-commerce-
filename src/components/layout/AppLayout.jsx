import { Outlet } from "react-router-dom";
import { TopHeader } from "../Header/TopHeader";
import { Footer } from "../Footer/Footer";

export const AppLayout = () => {
  return (
    <>
      <TopHeader />
      <Outlet />
      <Footer />
    </>
  );
};
