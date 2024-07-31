import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { FC, useState } from "react";

interface CardProp {
	content: number;
}

const Card: FC<CardProp> = ({ content }) => {
	const [showOverlay, setShowOverlay] = useState(false);

	return (
		<motion.div
			className="card-wrapper"
			onHoverStart={() => setShowOverlay(true)}
			onHoverEnd={() => setShowOverlay(false)}
		>
			{/* animate presence will re-animate.
            what was faded in on hover
            will be faded out on mouse leave

            animate presence must be stated before condition not in it

            It will track when the element leaves the dom 
            and repeats the animation based on exit property */}
			<AnimatePresence>
				{showOverlay && (
					<Link to="services">
						{/* fade in effect */}
						<motion.div
							className="card-overlay-wrapper"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
						>
							<motion.div className="card-overlay-container">
								{/* bouncing effect for button */}
								<motion.div
									initial={{ y: 10 }}
									animate={{ y: 0 }}
									exit={{ y: 10 }}
									className="card-button"
								>
									Discover More
								</motion.div>
							</motion.div>
						</motion.div>
					</Link>
				)}
			</AnimatePresence>
			{content}
		</motion.div>
	);
};

export { Card };
