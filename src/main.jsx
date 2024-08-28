import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { routes } from "./routes/routes";
import { mainTheme, globalStyles } from "./Assets/Themes/mainTheme";

if (import.meta.env.DEV && import.meta.env.VITE_REACT_MSW) {
	const { worker } = await import("./mocks/browser");
	await worker.start();
}

const router = createBrowserRouter(routes);
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ThemeProvider theme={mainTheme}>
			{globalStyles}
			<RouterProvider router={router} />
		</ThemeProvider>
	</React.StrictMode>
);
