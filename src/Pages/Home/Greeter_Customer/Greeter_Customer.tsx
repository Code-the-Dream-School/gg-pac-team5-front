import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import useTheme from "@mui/material/styles/useTheme";
import Typography from "@mui/material/Typography";
import { useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Greeter_Customer = () => {
	const appName = useRef(null);
	const navigate = useNavigate();
	const location = useLocation();
	const theme = useTheme();

	useEffect(() => {
		//START: TRIGGERS APPBAR onScroll
		if (appName.current) {
			const appNameBox = appName.current.getBoundingClientRect();

			// Update the location state by re-navigating to the same path
			navigate(location.pathname, {
				replace: true, // replace the current entry in history stack
				state: { ...location.state, appNameBox }, // merge with the existing state
			});
		}
		// END: TRIGGERS APPBAR onScroll
	}, []);

	return (
		<Container
			sx={{ display: "flex", flexFlow: "column", height: "100%", gap: "2rem" }}
		>
			<Box
				sx={{
					paddingTop: `${theme.customVariables.appBarMinHeight}vh`,
					display: "flex",
					flexFlow: "column",
					justifyContent: "center",
					alignItems: "center",
					flexGrow: 1,
					backgroundColor: "primary.main",
				}}
				ref={appName}
			>
				<Typography variant="h1">PYCHEE</Typography>
				<Typography variant="h1">LEACHY</Typography>
			</Box>
			<Container
				sx={{
					display: "grid",
					gridTemplateColumns: "repeat(12, 1fr)",
					gridTemplateRows: "repeat(12, 1fr)",
					height: "60%",
				}}
			>
				<Typography
					variant="h3"
					sx={{
						gridColumn: { xs: "1 / -1", md: "4 / -4" },
						gridRow: "1 / 4",
						textAlign: "center",
					}}
				>
					Meet your beauty masters with ease
				</Typography>
				<Box
					sx={{
						gridColumn: "1 / 5",
						gridRow: "3 / -1",
						overflow: "hidden",
					}}
				>
					<img
						src="/public/Home/front_1.png"
						alt="model person"
						style={{
							maxWidth: "100%",
							maxHeight: "100%",
							objectFit: "contain",
						}}
					/>
				</Box>
				<Typography
					variant="h2"
					sx={{
						gridColumn: "5 / -2",
						gridRow: "6 / 9",
						textAlign: "end",
					}}
				>
					Find the best, book fast, pay safe
				</Typography>
				<Button
					variant="outlined"
					color="secondary"
					sx={{
						gridColumn: "-5 / -2",
						gridRow: "-4 / -2",
					}}
					component={Link}
					to="pages"
				>
					EXPLORE
				</Button>
			</Container>
		</Container>
	);
};

export { Greeter_Customer };
