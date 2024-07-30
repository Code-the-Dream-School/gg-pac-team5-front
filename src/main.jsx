import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import { Home } from "./pages/Home";
import { Auth_Layout } from "./pages/Auth/Auth_Layout";
import { Error } from "./pages/Error/Error";
import Pages from "./pages/Pages/Pages.jsx";
import "./index.css";
import Services from './Pages/Services/Services.jsx'

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
        path: 'services',
        element: <Services />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
