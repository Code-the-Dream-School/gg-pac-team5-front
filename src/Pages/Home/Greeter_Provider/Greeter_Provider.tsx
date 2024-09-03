import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const Greeter_Provider = () => {
	return (
		<>
			<Container
				sx={{
					display: "flex",
					flexBasis: "70%",
					flexGrow: 0,
					flexShrink: 0,
					width: "100%",
					height: "100%",
					flexFlow: "row nowrap",
				}}
			>
				<Typography
					variant="h5"
					sx={{
						flexBasis: "50%",
						flexGrow: 0,
						flexShrink: 0,
						textAlign: "center",
						marginTop: "10%",
					}}
				>
					ARE YOU A BEAUTICIAN?
				</Typography>
				<Box
					sx={{
						flexBasis: "50%",
						flexGrow: 0,
						flexShrink: 0,
						height: "100%",
						maxHeight: "100%",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						overflow: "hidden",
					}}
				>
					<Box
						component="img"
						sx={{
							maxWidth: "100%",
							maxHeight: "100%",
							width: "auto",
							minWidth: "50%",
							height: "auto",
							objectFit: "cover",
							objectPosition: "50% 0",
						}}
						alt="Beautician smiling"
						src="/public/Home/front_2.png"
					/>
				</Box>
			</Container>
			<Container
				sx={{
					flexBasis: "30%",
					flexGrow: 0,
					flexShrink: 0,
					display: "flex",
					justifyContent: "space-around",
					alignItems: "center",
				}}
			>
				<Typography
					variant="h5"
					sx={{
						maxWidth: "70%",
					}}
				>
					word one, word two, word thirty three
				</Typography>
				<Button
					variant="outlined"
					sx={{
						padding: { sx: "1rem", md: "1rem 5rem" },
					}}
					color="secondary"
					component={Link}
					to="auth"
				>
					Join us
				</Button>
			</Container>
		</>
	);
};

export { Greeter_Provider };
