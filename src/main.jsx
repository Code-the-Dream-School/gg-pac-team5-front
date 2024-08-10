import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";
if (import.meta.env.DEV && import.meta.env.VITE_REACT_MSW) {
	const { worker } = await import("./mocks/browser");
	await worker.start();
}

const router = createBrowserRouter(routes);
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
