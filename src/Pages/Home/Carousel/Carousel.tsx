import { FC, useEffect, useState } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import { Container, Typography } from "@mui/material";
import { Card } from "./Card";
import "../../../Assets/Home/Carousel.css";
import useMeasure from "react-use-measure";

type Card = number;
type List = Card[];

interface CarouselProps {
	resolvedPromise?: List;
}

const Carousel: FC<CarouselProps> = ({ resolvedPromise }) => {
	const FAST_DURATION = 25;
	const SLOW_DURATION = 175;
	const [duration, setDuration] = useState(FAST_DURATION);

	let [ref, { width }] = useMeasure();
	const list = resolvedPromise;
	// [useMotionValue] where you need to animate properties dynamically
	// based on user interactions or other factors.

	const xTranslation = useMotionValue(0);
	const [mustFinish, setMustFinish] = useState(false);
	const [rerender, setRerender] = useState(false);

	useEffect(() => {
		let controls;
		// the element will move left which means that it's starting point will be moving out of view
		// final position is to tell how much to the left the element should be shifted before to end the animation cycle
		// the element has two lists of the same size, meaning that animation must stop when the first list leaves the screen entirely
		// e.g. width on single list = 200. width of element (2 lists) 2 * 200 = 400
		// final position is -400 / 2 = -200, that cover the entire list width
		let finalPosition = -width / 2;

		// this if statement rerenders the component with updates position every time user interacts with it,
		// so there will be no hiccups and the list wouldn't start from position 0
		if (mustFinish) {
			// keeps track of progress
			// duration has to be less if the list started moving to keep proportional speed
			// "left over duration"
			const progressAlreadyMade =
				duration * (1 - xTranslation.get() / finalPosition);
			controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
				ease: "linear",
				duration: progressAlreadyMade,
				onComplete: () => {
					setMustFinish(false);
					// Without this line, the animation may break
					// because the animate function can sometimes get stuck
					// or not properly loop through the entire list of items,
					// especially when the speed changes dynamically.
					setRerender(!rerender);
				},
			});
		} else {
			controls = animate(xTranslation, [0, finalPosition], {
				ease: "linear",
				duration: duration,
				repeat: Infinity,
				repeatType: "loop",
				repeatDelay: 0,
			});
		}

		// cleans up after rerendering
		return controls?.stop;
	}, [xTranslation, width, duration, rerender]);

	return (
		<section aria-labelledby="carousel-heading" className="carousel-wrapper">
			<Typography
				variant="h3"
				id="carousel-heading"
				className="carousel-heading"
				sx={{
					textAlign: "center",
					margin: "5rem 0",
				}}
			>
				Say hi to your local beauticians
			</Typography>
			{/* ref={ref} - to measure the element  */}
			<motion.div
				className="carousel-container"
				style={{ x: xTranslation, overflowX: "hidden", zIndex: 40 }}
				ref={ref}
				onHoverStart={() => {
					setMustFinish(true);
					setDuration(SLOW_DURATION);
				}}
				onHoverEnd={() => {
					setMustFinish(true);
					setDuration(FAST_DURATION);
				}}
			>
				{Array.isArray(list) && list.length !== 0 ? (
					// the whole component will be rerendered
					// when the first item of the second list will hit
					// _the position_ of the first item of the first list on the screen to ensure infinite scrolling
					[...list, ...list].map((item, idx) => {
						return <Card key={`${item}-${idx}`} content={item} />;
					})
				) : (
					<> nothing to display </>
				)}
			</motion.div>
		</section>
	);
};
export { Carousel };
