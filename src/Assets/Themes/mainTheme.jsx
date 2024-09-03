/*
  Try not to expand this file
  if possible create separate file with you themes and import 
  it here and deep merge it with mainTheme

  TODO: talk with mentors about it

  import { deepmerge } from '@mui/utils';
  import { createTheme } from '@mui/material/styles';

  const theme = createTheme(deepmerge(options1, options2));
*/

import { orange, brown, purple } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
import { GlobalStyles } from "@mui/material";

const mainTheme = createTheme({
	customVariables: {
		appBarMinHeight: 10,
	},
	palette: {
		primary: {
			main: orange[100],
			darker: orange[200],
		},
		secondary: {
			main: brown["A700"],
		},
		text: {
			primary: brown["A700"],
			highlightedText: brown[900],
			activeNavLink: brown[900],
		},
	},
	components: {
		MuiTypography: {
			styleOverrides: {
				root: ({ theme }) => ({
					color: theme.palette.text.highlightedText,
					fontSize: "16px",
					[theme.breakpoints.up("sm")]: {
						fontSize: "32px",
					},
					[theme.breakpoints.up("md")]: {
						fontSize: "40px",
					},
					[theme.breakpoints.up("lg")]: {
						fontSize: "30px",
					},
				}),
			},
		},
		MuiAppBar: {
			variants: [
				{
					props: { variant: "mainNavBar" },
					style: ({ theme }) => ({
						height: `${theme.customVariables.appBarMinHeight}vh`,
					}),
				},
			],
		},
		MuiLink: {
			styleOverrides: {
				root: {
					"&.active": {
						fontWeight: "bold",
						textDecoration: "underline",
						color: "text.activeNavLink",
					},
				},
			},
		},
		MuiContainer: {
			styleOverrides: {
				root: {
					margin: 0,
					padding: 0,
					width: "100%",
					maxWidth: "100%",
					overflowX: "hidden",
				},
			},
			defaultProps: {
				disableGutters: true,
			},
			variants: [
				{
					props: { variant: "containerNavbarTrimmed" },
					style: ({ theme }) => ({
						height: `${100 - theme.customVariables.appBarMinHeight}vh`,
					}),
				},
				{
					props: { variant: "fullScreen" },
					style: {
						height: "100vh",
					},
				},
			],
		},
	},
});

const globalStyles = (
	<GlobalStyles
		styles={{
			a: {
				textDecoration: "none",
				color: mainTheme.palette.text.primary,
			},
			"a:hover": {
				color: mainTheme.palette.text.primary,
			},
			"*": {
				overflowX: "hidden !important",
			},
		}}
	/>
);

export { mainTheme, globalStyles };
