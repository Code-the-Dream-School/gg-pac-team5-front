import { Avatar } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
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
		<>
			<Avatar alt={userName} src={url} sx={{ width: 56, height: 56 }} />
		</>
	);
};

export { Review_Card };
