import { CSSProperties, useState } from "react";
import { NavLink } from "react-router-dom";
import "../../../Assets/Layouts/NavBar.css";

import { LogoComponent } from "../../../Reusable_Components/LogoComponent";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

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
	];
	const [anchorElNav, setAnchorElNav] = useState(null);
	const [anchorElUser, setAnchorElUser] = useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
		document.body.style.paddingRight = "0px";
	};

	return (
		<AppBar position="static" variant="mainNavBar">
			<Container maxWidth="xl" sx={{ height: "100%" }}>
				<Toolbar sx={{ height: "100%" }}>
					<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
						<IconButton
							size="large"
							aria-label="website map"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-mainNavBar"
							disableScrollLock
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "left",
							}}
							transformOrigin={{
								vertical: "top",
								horizontal: "left",
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: "block", md: "none" },
							}}
						>
							{pages.map(({ displayedName, linksTo }) => (
								<MenuItem
									key={`${displayedName} ${linksTo}`}
									onClick={handleCloseNavMenu}
								>
									<Typography
										sx={{ textAlign: "center" }}
										component={NavLink}
										to={linksTo}
									>
										{displayedName}
									</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
					<Box sx={{ flexGrow: 1, height: "100%" }}>
						<LogoComponent />
					</Box>
					<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
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
					<Box
						sx={{
							flexGrow: 0,
							display: { xs: "flex", md: "flex" },
						}}
					>
						{/* TODO:
							change alt to real user data  */}
						<NavLink
							to="profile"
							end
							style={({ isActive }) => (isActive ? activeStyles : undefined)}
						>
							<Avatar
								alt="User"
								src="https://i.etsystatic.com/16421349/r/il/f21def/3144130361/il_fullxfull.3144130361_2i6w.jpg"
								sx={{ width: 56, height: 56 }}
							/>
						</NavLink>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export { NavBar };
