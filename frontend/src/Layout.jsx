import React from "react";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./pages/home/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
const Layoutx = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layoutx />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      // {
      //   path: "/products/:id",
      //   element: <Products />,
      // },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Register />,
  },
]);

const Layout = () => {
  return (
    <div>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </div>
  );
};

export default Layout;
