import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import { Home } from "./pages/Home/Home.jsx";
import { Auth_Layout } from "./pages/Auth/Auth_Layout.jsx";
import { Error } from "./pages/Error/Error.jsx";
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
