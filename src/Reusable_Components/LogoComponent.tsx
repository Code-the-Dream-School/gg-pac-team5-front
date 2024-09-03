import IconButton from "@mui/material/IconButton";
import Logo from "../Assets/Shared_Assets/logo.svg?react";
import { Link } from "react-router-dom";

const LogoComponent = (props) => {
	return (
		<IconButton
			color="inherit"
			sx={{ height: "100%", width: "auto", p: 0 }}
			component={Link}
			to="/"
		>
			<Logo {...props} style={{ height: "100%", width: "auto" }} />
		</IconButton>
	);
};

export { LogoComponent };
