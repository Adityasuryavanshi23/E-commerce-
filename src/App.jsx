import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HeroSection } from "./components/Hero sections/Hero-section";
import { HeroSecondSection } from "./components/Hero sections/HeroSecondSection";
import { HeroSecondSection1 } from "./components/Hero sections/HeroSecondSection1";
import { JBLimage } from "./components/Adverstisement sections/JBLimage";
import { NewArrival } from "./components/Adverstisement sections/NewArrival";
import { ProductsSection } from "./components/Products/ProductsSection";
import { SellingProduct } from "./components/Products/SellingProduct";
import { SignUp } from "./pages/Signup";
import { Login } from "./pages/Login";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
import useFetchProducts from "./hook/useFetchProducts";
import { useEffect } from "react";
import { Cart } from "./pages/Cart";
import { ProductDetail } from "./pages/ProductDetail";
import { Wishlist } from "./pages/Wishlist";
import { AppLayout } from "./components/layout/AppLayout";

const Home = () => {
  const { fetchProducts } = useFetchProducts();
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <HeroSection />
      <HeroSecondSection />
      <HeroSecondSection1 />
      <SellingProduct />
      <JBLimage />
      <ProductsSection />
      <NewArrival />
    </>
  );
};

const Router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
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
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
    ],
  },
]);

export const App = () => {
  return <RouterProvider router={Router} />;
};
