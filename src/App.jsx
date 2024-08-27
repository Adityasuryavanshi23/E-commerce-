import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/Hero-section";
import { HeroSecondSection } from "./components/HeroSecondSection";
import { HeroSecondSection1 } from "./components/HeroSecondSection1";
import { JBLimage } from "./components/JBLimage";
import { NewArrival } from "./components/NewArrival";
import { ProductsSection } from "./components/ProductsSection";
import { SellingProduct } from "./components/SellingProduct";
import { TopHeader } from "./components/TopHeader";
import { SignUp } from "./pages/Signup";
import { Login } from "./pages/Login";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
import useFetchProducts from "./hook/useFetchProducts";
import { useEffect } from "react";
import { Cart } from "./pages/Cart";
import { ProductDetail } from "./pages/ProductDetail";

const Home = () => {
  const { fetchProducts } = useFetchProducts();
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <TopHeader />
      <HeroSection />
      <HeroSecondSection />
      <HeroSecondSection1 />
      <SellingProduct />
      <JBLimage />
      <ProductsSection />
      <NewArrival />
      <Footer />
    </>
  );
};

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/productdetail/:id",
    element: <ProductDetail />,
  },
]);

export const App = () => {
  return <RouterProvider router={Router} />;
};
