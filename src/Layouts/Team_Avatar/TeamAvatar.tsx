import { Avatar, styled } from "@mui/material";

const TeamAvatar = styled(Avatar)(({ theme }) => ({
	width: 150,
	height: 150,
	border: `thick solid orange`,
	[theme.breakpoints.down("sm")]: {
		width: 120,
		height: 120,
	},
	[theme.breakpoints.up("md")]: {
		// width: "30vw", // For extra large screens
		// minWidth: 56,
		// minHeight: 56,
	},
	[theme.breakpoints.up("lg")]: {
		// width: "30vw", // For extra large screens
		// minWidth: 56,
		// minHeight: 56,
	},
	[theme.breakpoints.up("xl")]: {
		// width: "30vw", // For extra large screens
	},
}));

export { TeamAvatar };
