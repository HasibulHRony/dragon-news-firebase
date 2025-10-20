import { createBrowserRouter, Navigate } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import CategoryNews from "../pages/CategoryNews";
import Home from "../pages/Home";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { AuthLayout } from "../layouts/AuthLayout";
import { NewsDetails } from "../pages/NewsDetails";
import { PrivetRoute } from "../Provider/PrivetRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <Navigate to="/category/0" />,
      },
      {
        path: "/category/:id",
        element: <CategoryNews></CategoryNews>,
        loader: () => fetch("/news.json"),
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>
      },
      {
        path: "/auth/register",
        element: <Register></Register>
      },
    ]
  },
  {
    path: "/news-details/:id",
    element: <PrivetRoute>
      <NewsDetails></NewsDetails>
    </PrivetRoute>,
    loader: () => fetch('../news.json'),
  },
  {
    path: "/*",
    element: <h2>Error404</h2>,
  },
]);

export default router;
