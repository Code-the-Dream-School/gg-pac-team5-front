import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
	const activeStyles = {
		fontWeight: "bold",
		textDecoration: "underline",
		color: "#161616",
	};

	return (
		<nav className="home-page-wrapper">
			<NavLink
				to="."
				end
				style={({ isActive }) => (isActive ? activeStyles : null)}
			>
				Home
			</NavLink>
			<NavLink
				to="main"
				style={({ isActive }) => (isActive ? activeStyles : null)}
			>
				Main
			</NavLink>
			<NavLink
				to="auth"
				style={({ isActive }) => (isActive ? activeStyles : null)}
			>
				Login
			</NavLink>
		</nav>
	);
};

export { NavBar };
