import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import { Home } from "./Pages/Home/Home";
import { Auth_Layout } from "./Pages/Auth/Auth_Layout";
import { Error } from "./Pages/Error/Error";
import "./index.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <Error />,
		children: [
			{
				element: <Home />,
				index: true,
			},
			{
				path: "auth",
				element: <Auth_Layout />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
