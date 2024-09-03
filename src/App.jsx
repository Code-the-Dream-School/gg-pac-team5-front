import React from 'react';
// import {useEffect}  from "react";
// import { getAllData } from "./util/index";
import { Outlet } from "react-router-dom";
import { NavBar } from "./Layouts/Header/NavBar/NavBar";
import { Footer } from "./Layouts/Footer/Footer";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import UserProvider from "./hooks/UserProvider"
import "./App.css";

function App() {
	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<UserProvider>
				<div className="main-wrapper">
					<NavBar />
					<div className="content-wrapper">
						<Outlet />
					</div>
					<Footer />
				</div>
			</UserProvider>
		</LocalizationProvider >
	);
}

export default App;
