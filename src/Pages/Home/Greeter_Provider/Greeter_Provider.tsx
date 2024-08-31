import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const Greeter_Provider = () => {
	return (
		<>
			<Container
				className="outlined blue"
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
					className="outlined purple"
					variant="h5"
					sx={{
						flexBasis: "50%",
						flexGrow: 0,
						flexShrink: 0,
						textAlign: "center",
					}}
				>
					ARE YOU A BEAUTICIAN?
				</Typography>
				<Box
					className="outlined"
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
						className="outlined"
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
				sx={{ flexBasis: "30%", flexGrow: 0, flexShrink: 0 }}
				className="outlined"
			>
				<Typography variant="h5">
					word one, word two, word thirty three
				</Typography>
				<Button variant="outlined" color="secondary" component={Link} to="auth">
					Join us
				</Button>
			</Container>
		</>
	);
};

export { Greeter_Provider };
