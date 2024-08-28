import React from "react";
// import {useEffect}  from "react";
// import { getAllData } from "./util/index";
import { Outlet } from "react-router-dom";
import { NavBar } from "./Layouts/Header/NavBar/NavBar";
import { Footer } from "./Layouts/Footer/Footer";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import UserProvider from "./hooks/UserProvider";
import "./App.css";
import Container from "@mui/material/Container";

function App() {
	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<UserProvider>
				<Container
					sx={{
						display: "flex",
						flexDirection: "column",
						margin: "auto",
						minHeight: "100vh",
					}}
					className="outlined purple"
				>
					<NavBar />
					<Container sx={{ flexGrow: 1 }}>
						<Outlet />
					</Container>
					<Footer />
				</Container>
			</UserProvider>
		</LocalizationProvider>
	);
}

export default App;
