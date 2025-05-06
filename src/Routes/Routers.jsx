import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "./Pages/Home";
import CategoryNews from "./Pages/CategoryNews";
import LogIn from "./Pages/LogIn";
import Register from "./Pages/Register";
import AuthLayout from "../Layouts/AuthLayout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        path: "",
        element: <Home></Home>,
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
        element: <LogIn></LogIn>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },

  {
    path: "/news",
    element: <div>News Layout</div>,
  },
  {
    path: "/*",
    element: <div>Error 404 </div>,
  },
]);

export default router;
