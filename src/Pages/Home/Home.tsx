import { defer, useLoaderData } from "react-router-dom";
import { Container, Grid } from "@mui/material";
import { Carousel } from "./Carousel/Carousel";
import { Greeter_Customer } from "./Greeter_Customer/Greeter_Customer";
import { Parallax } from "./Divider/Parallax";
import { Feedback } from "./Feedback/Feedback";
import { SuspendedWrapperWithPromise } from "../../Reusable_Components/SuspendedWrapperWithPromise";

type Card = number;
type List = Card[];

const loader = async () => {
	// Simulated API call to get data to display for the carousel
	const axiosPromise = new Promise<List>((resolve) => {
		// throw new Error("ALARM!");
		setTimeout(() => {
			resolve([1, 2, 3, 4, 5, 6, 7]);
		}, 1300);
	});

	return defer({ provSummary: axiosPromise });
};

const Home = () => {
	const data = useLoaderData() as { provSummary: Promise<List> };
	const { provSummary } = data;

	return (
		<>
			<Container variant="containerNavbarTrimmed">
				<Grid
					container
					className="outlined"
					sx={{
						padding: 0,
						justifyContent: "space-between",
						flexFlow: "column",
					}}
				>
					<Grid>
						<Greeter_Customer />
					</Grid>
					<Grid
						sx={{
							minHeight: "fit-content",
						}}
					>
						<SuspendedWrapperWithPromise promise={provSummary}>
							<Carousel />
						</SuspendedWrapperWithPromise>
					</Grid>
				</Grid>
			</Container>
			<Container variant="fullScreen">
				<Parallax />
			</Container>
			<Container variant="fullScreen" className="outlined red">
				<div>Greeter_Provider</div>
			</Container>
			<Container
				className="outlined purple"
				sx={{
					display: "flex",
					flexDirection: "column",
					gap: "1rem",
					height: "auto",
				}}
			>
				<Feedback />
			</Container>
		</>
	);
};

export { Home, loader };
