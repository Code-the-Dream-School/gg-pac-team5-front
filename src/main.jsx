import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App"; 
import Error from "./Error"; 
import Home, { homeLoader } from "./Pages/Home"; 
import Auth_Layout from "./Pages/Auth_Layout";
import Profile from "./Pages/Pages/Profile"; 

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
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);

if (import.meta.env.DEV && import.meta.env.VITE_REACT_MSW) {
  const { worker } = await import("./mocks/browser");
  await worker.start();
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
