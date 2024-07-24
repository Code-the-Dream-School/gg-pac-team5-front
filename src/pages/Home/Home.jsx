import { Carousel } from "./Carousel/Carousel";
import { NavBar } from "./NavBar/NavBar";

const Home = () => {
	return (
		<>
			<NavBar />
			<div>Greeter_Customer</div>
			<Carousel />
			<div>Divider</div>
			<div>Greeter_Provider</div>
			<div>Feedback</div>
			<div>Footer</div>
		</>
	);
};

export { Home };
