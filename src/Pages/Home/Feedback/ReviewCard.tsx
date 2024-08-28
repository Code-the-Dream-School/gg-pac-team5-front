import { Avatar, Box, Paper, Rating, Typography } from "@mui/material";
import { ReviewCardBox } from "../../../Layouts/Review_Card/ReviewCardBox";

// 35 characters per line estimately
const calcBoxHeight = (string) => {
	const maximumNumberOfChars = 170;
	const charsPerLine = 35;
	const baseGridRows = 12; // Minimum grid rows to display

	return string.length < maximumNumberOfChars
		? `repeat(${baseGridRows}, minmax(min-content, auto))`
		: `repeat(${
				Math.ceil(string.length / charsPerLine) + baseGridRows
		  }, minmax(min-content, auto))`;
};

const ReviewCard = ({ message }) => {
	return (
		<ReviewCardBox
			sx={{
				gridTemplateRows: calcBoxHeight(message),
				minHeight: "fit-content",
			}}
		>
			{/* 

    AVATAR

             */}
			<Box
				sx={{
					gridColumn: "1 / 4",
					gridRow: "1 / -1",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Avatar
					variant="circular"
					src="https://i.etsystatic.com/16421349/r/il/f21def/3144130361/il_fullxfull.3144130361_2i6w.jpg"
					sx={{
						width: { xs: "6rem", md: "9rem", lg: "9rem" },
						height: { xs: "6rem", md: "9rem", lg: "9rem" },
					}}
				/>
			</Box>
			{/* 

    OUTER OUTLINE

             */}
			<Paper
				sx={{
					gridColumn: "2 / -2",
					gridRow: "2 / -2",
					backgroundColor: "rgba(255,255,255,.1)",
					minHeight: "10rem",
				}}
				elevation={6}
			></Paper>
			{/* 

    RATING/DATE

             */}
			<Box
				sx={{
					gridColumn: "4 / -2",
					gridRow: "2 / 4",
					display: "flex",
					alignItems: "center",
				}}
			>
				<Rating name="size-medium" defaultValue={5} />
			</Box>
			<Box
				sx={{
					gridColumn: "-4 / -2",
					gridRow: "3 / 4",
					display: "flex",
					justifyContent: "end",
					paddingRight: "1rem",
				}}
			>
				05/10/'99
			</Box>
			{/* 

    INNER OUTLINE

             */}
			<Paper
				sx={{
					gridColumn: "4 / -2",
					gridRow: "4 / -3",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					backgroundColor: "rgba(255,255,255,.1)",
					padding: "1rem",
					marginRight: "1rem",
					flex: 1,
					height: "auto",
					overflow: "visible",
				}}
				variant="outlined"
			>
				<Typography variant="body2" sx={{ textAlign: "center" }}>
					{message}
				</Typography>
			</Paper>
			{/* 

    SIGNATURE

             */}
			<Box
				sx={{
					gridColumn: "4 / -2",
					gridRow: "-3 / -2",
					display: "flex",
					justifyContent: "end",
					paddingRight: "1rem",
				}}
			>
				WIDEWIDEWIDE L.
			</Box>
		</ReviewCardBox>
	);
};

export { ReviewCard };
