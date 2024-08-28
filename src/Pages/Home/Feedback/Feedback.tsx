import { ReviewCard } from "./ReviewCard";
import { msg } from "./mockdata.js";

const Feedback = () => {
	return (
		<>
			<ReviewCard message={msg[1]} />
			<ReviewCard message={msg[2]} />
			<ReviewCard message={msg[3]} />
		</>
	);
};

export { Feedback };
