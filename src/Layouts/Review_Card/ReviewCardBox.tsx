import { Box, styled } from "@mui/material";

const ReviewCardBox = styled(Box)(({ theme }) => ({
	display: "grid",
	width: "30rem", // Default width
	minHeight: "fit-content",
	margin: "auto",
	gridTemplateColumns: "repeat(9, 1fr)",
	[theme.breakpoints.down("sm")]: {
		// TODO: define height for responsive design
		width: "100vw", // For mobile
		height: "auto",
	},
	[theme.breakpoints.up("xl")]: {
		// width: "30vw", // For extra large screens
	},
}));

export { ReviewCardBox };
