import React, { useState, useEffect } from "react";
import { getAllData } from "./util/index";
import { Outlet } from "react-router-dom";
import { Home } from "./pages/Home";

const URL = "http://localhost:8000/api/v1/";

function App() {
	const [message, setMessage] = useState("");

	useEffect(() => {
		(async () => {
			const myData = await getAllData(URL);
			setMessage(myData.data);
		})();

		return () => {
			console.log("unmounting");
		};
	}, []);

	return (
		<>
			<Outlet />
		</>
	);
}

export default App;
