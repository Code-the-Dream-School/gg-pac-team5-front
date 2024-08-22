import "../../../Assets/Home/Parallax.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Parallax = () => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		// how and when to start triggering the animation
		// start of the viewport meets the start of the container
		// end when start of the viewport meets the end of the container
		offset: ["start start", "end start"],
	});

	// scrollYProgress returns value from 0 to 1 (e.g 0.12984)
	// second parameter - range
	// third - speed
	const titleY = useTransform(scrollYProgress, [0, 0.8], ["0", "140%"]);
	const rightY = useTransform(scrollYProgress, [0, 1], ["0", "110%"]);
	const middleY = useTransform(scrollYProgress, [0, 1], ["0", "120%"]);
	const leftY = useTransform(scrollYProgress, [0, 1], ["0", "130%"]);

	return (
		<div ref={ref} className="parallax-wrapper">
			<motion.h1 className="parallax title" style={{ y: titleY }}>
				Empowering your style
			</motion.h1>
			<motion.div className="parallax right" style={{ y: rightY }}></motion.div>
			<motion.div
				className="parallax middle"
				style={{ y: middleY }}
			></motion.div>
			<motion.div className="parallax left" style={{ y: leftY }}></motion.div>
		</div>
	);
};

export { Parallax };
