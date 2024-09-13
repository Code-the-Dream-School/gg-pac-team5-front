import { Box, styled } from "@mui/material";

const ReviewCardBox = styled(Box)(({ theme }) => ({
	display: "grid",
	width: "30rem", // Default width
	margin: "1rem auto",
	padding: "1rem 0",
	gridTemplateColumns: "repeat(9, 1fr)",
	gridTemplateRows: `repeat(12, minmax(min-content, auto))`,
	[theme.breakpoints.down("sm")]: {
		// TODO: define height for responsive design
		width: "100vw", // For mobile
		height: "auto",
	},
	[theme.breakpoints.up("md")]: {
		// width: "30vw", // For extra large screens
	},
	[theme.breakpoints.up("lg")]: {
		// width: "30vw", // For extra large screens
	},
	[theme.breakpoints.up("xl")]: {
		// width: "30vw", // For extra large screens
	},
}));

export { ReviewCardBox };
