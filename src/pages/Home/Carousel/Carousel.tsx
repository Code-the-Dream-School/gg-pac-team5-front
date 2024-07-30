import { FC, useEffect, useState } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import { Typography } from "@mui/material";
import { Card } from "./Card";
import "../../../Assets/Home/Carousel.css";
import useMeasure from "react-use-measure";

type Card = number;
type List = Card[];

interface CarouselProps {
	list: List;
}

const Carousel: FC<CarouselProps> = ({ list = [] }) => {
	const FAST_DURATION = 25;
	const SLOW_DURATION = 75;
	const [duration, setDuration] = useState(FAST_DURATION);

	let [ref, { width }] = useMeasure();

	// [useMotionValue] where you need to animate properties dynamically
	// based on user interactions or other factors.
	const xTranslation = useMotionValue(0);
	const [mustFinish, setMustFinish] = useState(false);
	const [rerender, setRerender] = useState(false);

	useEffect(() => {
		let controls;
		let finalPosition = -width / 2;

		if (mustFinish) {
			const progressAlreadyMade =
				duration * (1 - xTranslation.get() / finalPosition);
			controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
				ease: "linear",
				duration: progressAlreadyMade,
				onComplete: () => {
					setMustFinish(false);
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
				variant="h5"
				component="h2"
				id="carousel-heading"
				className="carousel-heading"
			>
				SAY HI TO YOUR BEAUTY SPECIALIST
			</Typography>
			{/* ref={ref} - to measure the element  */}
			<motion.div
				className="carousel-container"
				style={{ x: xTranslation }}
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
				{list.length === 0 ? (
					<> nothing to display </>
				) : (
					// the whole component will be rerendered
					// when the first item of the second list will hit
					// _the position_ of the first item of the first list on the screen to ensure infinite scrolling
					[...list, ...list].map((item, idx) => {
						return <Card key={`${item}-${idx}`} content={item} />;
					})
				)}
			</motion.div>
		</section>
	);
};
export { Carousel };
