import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import { Home, loader as homeLoader } from "./Pages/Home/Home";
import { Auth_Layout } from "./Pages/Auth/Auth_Layout";
import { Error } from "./Pages/Error/Error";
import Pages from "./Pages/Pages/Pages.jsx";
import "./index.css";
import Services from './Pages/Services/Services.jsx'

/** @import { Router } from "react-router-dom" */

/** @typedef { Router } */
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
        path: "pages/:pageName",
        element: <Pages />,
      },
      {
        path: 'pages',
        element: <Services />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
