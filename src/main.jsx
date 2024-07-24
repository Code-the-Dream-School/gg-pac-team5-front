import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Pages from "./routes/Pages";
import ErrorPage from "./ErrorPage";

const router = createBrowserRouter([
  {
    path: "/pages/:pageName",
    element: <Pages />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
