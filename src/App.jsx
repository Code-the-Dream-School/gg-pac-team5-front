import React from 'react';
// import { useState, useEffect } from "react";
// import { getAllData } from "./util/index";
import { Outlet } from "react-router-dom";
import { NavBar } from "./Layouts/Header/NavBar/NavBar";
import { Footer } from "./Layouts/Footer/Footer";
import "./App.css";
// import Profile from "./Pages/Pages/Profile.jsx";

function App() {
	return (
		<div className="main-wrapper">
			<NavBar />
			<div className="content-wrapper">
				<Outlet />
			</div>
			<Footer />
		</div>
	);
}

export default App;
