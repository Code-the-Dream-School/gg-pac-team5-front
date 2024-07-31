import { Carousel } from "./Carousel/Carousel";
import { Greeter_Customer } from "./Greeter_Customer/Greeter_Customer";
import { useLoaderData } from "react-router-dom";

type Card = number;
type List = Card[];

const loader = (): List => {
	// API call to get data to display for carousel
	return [1, 2, 3, 4, 5, 6, 7];
};

const Home = () => {
	const provSummary = useLoaderData() as List;

	return (
		<main>
			<Greeter_Customer />
			<Carousel list={provSummary} />
			<div>Divider</div>
			<div>Greeter_Provider</div>
			<div>Feedback</div>
		</main>
	);
};

export { Home, loader };
