import { FC, useEffect } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import { Card } from "./Card";
import "../../../Assets/Home/Carousel.css";
import useMeasure from "react-use-measure";

type Card = number;
type List = Card[];

interface CarouselProps {
	list: List;
}

const Carousel: FC<CarouselProps> = ({ list = [] }) => {
	let [ref, { width }] = useMeasure();
	// gap must be calculated along
	// with item size to rerender the component
	// keeping one source of truth to avoid future bugs
	const xTranslation = useMotionValue(0);

	// [useMotionValue] where you need to animate properties dynamically
	// based on user interactions or other factors.

	useEffect(() => {
		let controls;
		let finalPosition = -width / 2;

		controls = animate(xTranslation, [0, finalPosition], {
			ease: "linear",
			duration: 25,
			repeat: Infinity,
			repeatType: "loop",
			repeatDelay: 0,
		});

		// cleans up after rerendering
		return controls.stop;
	}, [xTranslation, width]);

	return (
		// ref={ref} - to measure the element
		<section aria-labelledby="carousel-heading" className="carousel-wrapper">
			<h2 id="carousel-heading" className="carousel-heading">
				SAY HI TO YOUR BEAUTY SPECIALIST
			</h2>
			{/* there is a hiccup when component rerenders. 
			it's because the calculation does not include temp borders  */}
			<motion.div
				className="carousel-container"
				style={{ x: xTranslation }}
				ref={ref}
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
