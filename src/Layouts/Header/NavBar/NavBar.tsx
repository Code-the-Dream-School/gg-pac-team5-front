import { CSSProperties, useState, useContext, useRef, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../../../Assets/Layouts/NavBar.css";
import { Button } from "@mui/material";
import UserContext from "../../../hooks/UserContext";
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
import { useTheme } from "@mui/material/styles";

const NavBar = () => {
	const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
	const [isAppBarTransparent, setIsAppBarTransparent] =
		useState<Boolean>(false);
	const { user, logout } = useContext(UserContext);
	const location = useLocation();
	const appBarElement = useRef<HTMLDivElement>(null);
	const appNameContainerBottom = location.state?.appNameBox?.bottom || 0;
	const theme = useTheme();

	useEffect(() => {
		const handleScroll = () => {
			if (appBarElement.current) {
				const appBarRect = appBarElement.current.getBoundingClientRect();
				const appBarBottomOnPage = window.scrollY + appBarRect.bottom;

				// Check if the bottom of the AppBar has reached or passed appNameContainerBottom
				if (appBarBottomOnPage >= appNameContainerBottom) {
					// AppBar has reached the bottom of appNameContainer
					setIsAppBarTransparent(true);
				} else {
					// AppBar has not reached the bottom of appNameContainer
					setIsAppBarTransparent(false);
				}
			}
		};

		window.addEventListener("scroll", handleScroll);

		// Initial call to set state based on the current scroll position
		handleScroll();

		// Clean up event listener on component unmount
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [appNameContainerBottom]);

	const activeStyles: CSSProperties =
		theme.components?.MuiLink?.styleOverrides?.root["&.active"] || {};

	const pages = [
		{
			displayedName: "Home",
			linksTo: ".",
		},
		{
			displayedName: "Find Service",
			linksTo: "pages",
		},
	];

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
		document.body.style.paddingRight = "0px";
	};

	return (
		<AppBar
			sx={{
				position: { xs: "static", md: "fixed" },
				transition: "background-color 0.3s ease-in-out",
				backgroundColor: isAppBarTransparent
					? "rgba(255, 255, 255)"
					: "primary.main",
				maxWidth: 1200,
				left: { xs: "0", md: "50%" },
				transform: { xs: "none", md: "translateX(-50%)" },
			}}
			variant="mainNavBar"
			ref={appBarElement}
		>
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
						{pages.map(({ displayedName, linksTo }) => (
							<Button
								key={`${displayedName} ${linksTo}`}
								onClick={handleCloseNavMenu}
								sx={{
									my: 2,
									display: "block",
									color: "text.primary",
								}}
								component={NavLink}
								to={linksTo}
								end
								style={({ isActive }) => (isActive ? activeStyles : undefined)}
							>
								{displayedName}
							</Button>
						))}
					</Box>
					<Box
						sx={{
							flexGrow: 0,
							display: { xs: "flex", md: "flex" },
						}}
					>
						{user ? (
							<>
								<Avatar
									alt="User"
									src="https://i.etsystatic.com/16421349/r/il/f21def/3144130361/il_fullxfull.3144130361_2i6w.jpg"
									sx={{ width: 56, height: 56 }}
								/>
								<Button
									type="submit"
									variant="contained"
									onClick={logout}
									sx={{ mt: 3, mb: 2 }}
								>
									Logout
								</Button>
							</>
						) : (
							<NavLink
								to="auth"
								style={({ isActive }) => (isActive ? activeStyles : undefined)}
							>
								Login
							</NavLink>
						)}
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export { NavBar };
