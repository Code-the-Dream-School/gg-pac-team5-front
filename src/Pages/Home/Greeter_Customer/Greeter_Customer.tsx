import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const Greeter_Customer = () => {
	return (
		<Container sx={{ display: "flex", flexFlow: "column", height: "100%" }}>
			<Box
				sx={{
					display: "flex",
					flexFlow: "column",
					alignItems: "center",
					flexGrow: 1,
				}}
			>
				<Typography variant="h1">Pychee</Typography>
				<Typography variant="h1">Leachy</Typography>
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
					variant="h4"
					sx={{
						gridColumn: { xs: "1 / -1", md: "4 / -4" },
						gridRow: "1 / 4",
						textAlign: "center",
					}}
				>
					MEET YOUR LOCAL BEAUTY MASTERS WITH EASE
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
					variant="h4"
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
