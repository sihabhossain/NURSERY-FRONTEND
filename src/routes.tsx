import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Shop from "./components/pages/Shop";
import Home from "./components/pages/Home";
import ProductManagement from "./components/pages/ProductManagement";
import Checkout from "./components/pages/Checkout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/management",
        element: <ProductManagement />,
      },
      {
        path: "/checkout",
        element: <Checkout   />,
      },
    ],
  },
]);
