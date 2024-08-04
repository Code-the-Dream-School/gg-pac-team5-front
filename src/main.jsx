import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import { Home, loader as homeLoader } from "./Pages/Home/Home";
import { Auth_Layout } from "./Pages/Auth/Auth_Layout";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import { Error } from "./Pages/Error/Error";
import { Pages, loader as pagesLoader } from "./Pages/Pages/Pages.jsx";
import Test from "./Pages/Test/Test.jsx";
import "./index.css";
import Cards from "./Pages/Services/Cards.jsx";

if (import.meta.env.DEV && import.meta.env.VITE_REACT_MSW) {
  const { worker } = await import("./mocks/browser");
  await worker.start();
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        element: <Home />,
        index: true,
        loader: homeLoader,
      },
      {
        path: "auth",
        element: <Auth_Layout />,
      },
      {
        path: "auth/login",
        element: <Login />,
      },
      {
        path: "auth/register",
        element: <Register />,
      },
      {
        path: "pages/:pageName",
        element: <Pages />,
        loader: pagesLoader,
      },
      {
        path: "pages",
        element: <Cards />,
      },
      {
        path: "test",
        element: <Test />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
