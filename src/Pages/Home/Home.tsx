import { Carousel } from "./Carousel/Carousel";
import { Greeter_Customer } from "./Greeter_Customer/Greeter_Customer";
import { useLoaderData } from "react-router-dom";
import "../../Assets/Home/Home.css";
import { Parallax } from "./Divider/Parallax";

type Card = number;
type List = Card[];

const loader = async (): Promise<List> => {
	// API call to get data to display for carousel
	return [1, 2, 3, 4, 5, 6, 7];
};

const Home = () => {
	const provSummary = useLoaderData() as List;

	return (
		<main className="home-wrapper">
			<section className="view one">
				<Greeter_Customer />
				<Carousel list={provSummary} />
			</section>
			<section className="view two">
				<Parallax />
			</section>
			<section className="view three">
				<div>Greeter_Provider</div>
			</section>
			<section className="view four">
				<div>Feedback</div>
			</section>
		</main>
	);
};

export { Home, loader };
