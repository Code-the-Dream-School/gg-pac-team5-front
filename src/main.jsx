import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import { Home, loader as homeLoader } from "./Pages/Home/Home";
import { Auth_Layout } from "./Pages/Auth/Auth_Layout";
import { Error } from "./Pages/Error/Error";
import { Pages } from "./Pages/Pages/Pages.jsx";
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
        path: "pages/:pageName",
        element: <Pages />,
        loader: async ({ params }) => {
          const res = await fetch(
            `http://localhost:8000/api/v1/vendors/name/${params.pageName}`
          );
          if (res.status === 404) {
            throw new Response("Not Found", { status: 404 });
          }
          return res.json();
        },
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
