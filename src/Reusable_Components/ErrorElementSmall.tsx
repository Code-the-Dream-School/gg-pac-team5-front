import { Alert } from "@mui/material";
import { FC } from "react";

type ErrorElementSmallProps = {
	message: string;
};

const ErrorElementSmall: FC<ErrorElementSmallProps> = ({ message }) => (
	<Alert severity="error">{message}</Alert>
);

export { ErrorElementSmall };
