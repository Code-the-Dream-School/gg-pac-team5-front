import { CSSProperties, useContext } from "react";
import { NavLink } from "react-router-dom";
import "../../../Assets/Layouts/NavBar.css";
import { Button } from "@mui/material";
import UserContext from "../../../hooks/UserContext";


const NavBar = () => {
	const { user, logout } = useContext(UserContext)
	const activeStyles: CSSProperties = {
		fontWeight: "bold",
		textDecoration: "underline",
		color: "#161616",
	};

	return (
		<nav className="nav-wrapper">
			<NavLink
				to="."
				end
				style={({ isActive }) => (isActive ? activeStyles : undefined)}
			>
				Home
			</NavLink>
			<NavLink
				to="pages"
				style={({ isActive }) => (isActive ? activeStyles : undefined)}
			>
				Find Service
			</NavLink>
			{user ? (<>
        <NavLink 
				to="profile"
				style={({ isActive }) => (isActive ? activeStyles : undefined)}
			>
				Profile
			</NavLink>
				<Button
					type="submit"
					variant="contained"
					onClick={logout}
					sx={{ mt: 3, mb: 2 }}
				>
					Logout
				</Button></>) :
				<NavLink
					to="auth"
					style={({ isActive }) => (isActive ? activeStyles : undefined)}
				>
					Login
				</NavLink>
			}
		</nav>
	);
};

export { NavBar };
