import { defer, useLoaderData } from "react-router-dom";
import { Container, Grid } from "@mui/material";
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

	return (
		<>
			<Container variant="containerNavbarTrimmed">
				<Greeter_Customer />
			</Container>
			<Container
				variant="fullScreen"
				sx={{ display: "flex", flexFlow: "column" }}
			>
				<Container sx={{ flexGrow: 1, zIndex: "tooltip" }}>
					<SuspendedWrapperWithPromise promise={provSummary}>
						<Carousel />
					</SuspendedWrapperWithPromise>
				</Container>
				<Container sx={{ flexGrow: 3 }}>
					<Parallax />
				</Container>
			</Container>
			<Container
				className="outlined red"
				sx={{ display: "flex", flexDirection: "column" }}
			>
				<Container
					sx={{
						display: "flex",
						minHeight: "50vh",
						height: "50vh",
						flexDirection: "column",
					}}
				>
					<Greeter_Provider></Greeter_Provider>
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
			</Container>
		</>
	);
};

export { Home, loader };
