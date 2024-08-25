import { Height } from "@mui/icons-material";
import { Box, styled } from "@mui/material";

const ReviewCardBox = styled(Box)(({ theme }) => ({
	display: "grid",
	width: "30rem", // Default width
	height: "15rem",
	margin: "auto",
	gridTemplateColumns: "repeat(9, 1fr)",
	gridTemplateRows: "repeat(12, 1fr)",
	[theme.breakpoints.down("sm")]: {
		// TODO: define height for responsive design
		width: "100vw", // For mobile
		height: "25vh",
	},
	[theme.breakpoints.up("xl")]: {
		// width: "30vw", // For extra large screens
	},
}));

export { ReviewCardBox };
