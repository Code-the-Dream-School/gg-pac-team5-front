import { defer, useLoaderData } from "react-router-dom";
import { Container, useTheme } from "@mui/material";
import { Carousel } from "./Carousel/Carousel";
import { Greeter_Customer } from "./Greeter_Customer/Greeter_Customer";
import { Parallax } from "./Divider/Parallax";
import { Feedback } from "./Feedback/Feedback";
import { SuspendedWrapperWithPromise } from "../../Reusable_Components/SuspendedWrapperWithPromise";
import { Greeter_Provider } from "./Greeter_Provider/Greeter_Provider";
import { API } from "../../config.js";
import { getData } from "../../util";
type Card = number;
type List = Card[];

/*
const loader = async () => {
	// Simulated API call to get data to display for the carousel
	const axiosPromise = new Promise<List>((resolve) => {
		// throw new Error("ALARM!");
		setTimeout(() => {
			resolve([1, 2, 3, 4, 5, 6, 7]);
		}, 1300);
	});

	return defer({ vendors: axiosPromise });
};
*/
const loader = async () => {
	return defer({ vendors: getData(`${import.meta.env.VITE_API_URL}/vendors`) });
};

const Home = () => {
	const data = useLoaderData() as { vendors: Promise<List> };
	const { vendors } = data;
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
				<SuspendedWrapperWithPromise promise={vendors}>
					<Carousel />
				</SuspendedWrapperWithPromise>
				<Parallax />
			</Container>
			<Container
				variant="greeter"
				sx={{
					display: "flex",
					flexDirection: "column",
					pl: { xs: "2rem", md: "0" },
					pr: { xs: "2rem", md: "0" },
				}}
			>
				<Greeter_Provider />
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
