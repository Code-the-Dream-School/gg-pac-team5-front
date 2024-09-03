import { defer, useLoaderData } from "react-router-dom";
import { Container, useTheme } from "@mui/material";
import { Carousel } from "./Carousel/Carousel";
import { Greeter_Customer } from "./Greeter_Customer/Greeter_Customer";
import { Parallax } from "./Divider/Parallax";
import { Feedback } from "./Feedback/Feedback";
import { SuspendedWrapperWithPromise } from "../../Reusable_Components/SuspendedWrapperWithPromise";
import { Greeter_Provider } from "./Greeter_Provider/Greeter_Provider";

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
	const theme = useTheme();

	return (
		<>
			<Container variant="greeter">
				<Greeter_Customer />
			</Container>
			<Container
				variant="fullScreen"
				sx={{
					background: theme.palette.primary.gradientBackground,
					overflow: "hidden",
				}}
			>
				<SuspendedWrapperWithPromise promise={provSummary}>
					<Carousel />
				</SuspendedWrapperWithPromise>
				<Parallax />
			</Container>
			<Container sx={{ display: "flex", flexDirection: "column" }}>
				<Container
					sx={{
						display: "flex",
						minHeight: "100vh",
						height: "100vh",
						flexDirection: "column",
					}}
				>
					<Greeter_Provider></Greeter_Provider>
				</Container>
			</Container>
			<Container
				sx={{
					display: "flex",
					flexDirection: "column",
					gap: "2rem",
					height: "auto",
					padding: "5rem 0",
					background: theme.palette.primary.gradientBackgroundBack,
				}}
			>
				<Feedback />
			</Container>
		</>
	);
};

export { Home, loader };
