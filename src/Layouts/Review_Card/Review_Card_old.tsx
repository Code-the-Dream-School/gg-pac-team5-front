import { Avatar, Box, Container, Grid, Paper, Rating } from "@mui/material";
import { FC } from "react";

type Review_Card = {
	url: string;
	date: Date;
	userName: string;
	rating: number;
	content: string;
};

const Review_Card: FC<Review_Card> = ({
	url,
	date,
	userName,
	rating,
	content,
}) => {
	return (
		<Container
			variant="dashed"
			sx={{
				maxWidth: "30rem",
				width: "100%",
				maxHeight: "15rem",
				minHeight: "10rem",
				margin: "auto",
				position: "relative",
			}}
		>
			{" "}
			<Box
				sx={{
					position: "absolute",
					top: "50%",
					transform: "translateY(-50%)",
				}}
			>
				<Avatar
					alt={userName}
					src={url}
					sx={{
						width: { xs: "80px", sm: "100px", md: "120px", lg: "164px" },
						height: { xs: "80px", sm: "100px", md: "120px", lg: "164px" },
					}}
				/>
			</Box>
			<Box
				sx={{
					marginLeft: "15%",
					border: "2px black dotted",
					width: "100%",
					height: "100%",
					overflowY: "hidden",
				}}
			>
				<Grid
					container
					sx={{
						margin: "5% 0 0 15%",
						border: "2px red dotted",
						minHeight: "90%",
						paddingRight: "2rem",
					}}
				>
					<Grid item xs={8}>
						<Rating
							name="size-medium"
							defaultValue={rating || 5}
							precision={0.5}
							readOnly
						/>
					</Grid>
					<Grid item xs={4}>
						<Paper>date</Paper>
					</Grid>
					<Grid item xs={10} sx={{ height: "8em" }}>
						<Paper sx={{ height: "100%" }}>content</Paper>
					</Grid>
					<Grid item xs={4}>
						<Paper>xs=4</Paper>
					</Grid>
					<Grid item xs={8}>
						<Paper>xs=8</Paper>
					</Grid>
				</Grid>
			</Box>
		</Container>
	);
};

export { Review_Card };
