import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const Footer = () => {
	const [showScrollToTop, setShowScrollToTop] = useState(false);

	const handleScroll = () => {
		if (window.scrollY > 300) {
			setShowScrollToTop(true);
		} else {
			setShowScrollToTop(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<Container
			sx={{
				backgroundColor: (theme) => theme.palette.primary.darker,
				display: "flex",
				justifyContent: "center",
				gap: "3rem",
				lineHeight: "4rem",
				padding: "1rem",
				position: "relative",
			}}
		>
			<Link to="/">Home</Link>
			{showScrollToTop && (
				<IconButton
					onClick={scrollToTop}
					sx={{
						position: "fixed",
						bottom: "2rem",
						right: "2rem",
						backgroundColor: (theme) => theme.palette.primary.main,
						color: "white",
						"&:hover": {
							backgroundColor: (theme) => theme.palette.primary.dark,
						},
					}}
				>
					<ArrowUpwardIcon />
				</IconButton>
			)}
		</Container>
	);
};

export { Footer };
