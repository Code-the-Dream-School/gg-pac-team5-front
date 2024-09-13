import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { TeamAvatar } from "../../Layouts/Team_Avatar/TeamAvatar";
import Typography from "@mui/material/Typography";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const AvatarItem = (props) => {
	const { teamMemberName, avatarUrl, position, link, linkedIn } =
		props.teamMemberInfo;
	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "column",
				padding: "2rem",
			}}
		>
			<TeamAvatar
				alt={teamMemberName}
				src={avatarUrl}
				sx={{
					"&:hover": {
						transform: "scale(1.2)",
						transition: "transform 0.3s ease",
					},
				}}
			>
				<Link to={link} />
			</TeamAvatar>
			<Typography
				sx={{
					minWidth: "fit-content",
					margin: "auto",
					paddingTop: "1rem",
					fontSize: { xs: "14px", md: "20px", lg: "24px" },
				}}
			>
				{teamMemberName}
			</Typography>
			<Typography
				sx={{
					display: "flex",
					alignItems: "center",
					minWidth: "fit-content",
					margin: "auto",
					fontSize: { xs: "12px", md: "16px", lg: "20px" },
				}}
			>
				{position}
				<Link to={linkedIn}>
					<LinkedInIcon
						sx={{
							minWidth: "fit-content",
							color: "#0a66c2",
							marginLeft: "0.5rem",
						}}
					/>
				</Link>
			</Typography>
		</Box>
	);
};

export { AvatarItem };
