import { CSSProperties } from "react";
import { NavLink } from "react-router-dom";
import "../../../assets/layouts/NavBar.css";

const NavBar = () => {
	const activeStyles: CSSProperties = {
		fontWeight: "bold",
		textDecoration: "underline",
		color: "#161616",
	};

	return (
		<nav className="home-page-wrapper">
			<NavLink
				to="."
				end
				style={({ isActive }) => (isActive ? activeStyles : undefined)}
			>
				Home
			</NavLink>
			<NavLink
				to="main"
				style={({ isActive }) => (isActive ? activeStyles : undefined)}
			>
				Main
			</NavLink>
			<NavLink
				to="auth"
				style={({ isActive }) => (isActive ? activeStyles : undefined)}
			>
				Login
			</NavLink>
		</nav>
	);
};

export { NavBar };
