import { CSSProperties } from "react";
import { NavLink } from "react-router-dom";
import "../../../Assets/Layouts/NavBar.css";
import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import LightbulbIcon from "@mui/icons-material/Lightbulb";

const NavBar = () => {
	const activeStyles: CSSProperties = {
		fontWeight: "bold",
		textDecoration: "underline",
		color: "#161616",
	};

	const pages = [
		{
			displayedName: "Home",
			linksTo: ".",
		},
		{
			displayedName: "Find Service",
			linksTo: "pages",
		},
		{
			displayedName: "Login",
			linksTo: "auth",
		},
		{
			displayedName: "Profile",
			linksTo: "profile",
		},
	];

	return (
		<AppBar position="static" variant="mainNavBar">
			<Container maxWidth="xl" sx={{ height: "100%" }}>
				<Toolbar disableGutters sx={{ height: "100%" }}>
					<LightbulbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
					<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "flex" } }}>
						{pages.map(({ displayedName, linksTo }) => {
							return (
								<Typography
									textAlign="center"
									key={`${displayedName} ${linksTo}`}
								>
									<NavLink
										to={linksTo}
										end
										style={({ isActive }) =>
											isActive ? activeStyles : undefined
										}
									>
										{displayedName}
									</NavLink>
								</Typography>
							);
						})}
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export { NavBar };
