/*
  Try not to expand this file
  if possible create separate file with you themes and import 
  it here and deep merge it with mainTheme

  TODO: talk with mentors about it

  import { deepmerge } from '@mui/utils';
  import { createTheme } from '@mui/material/styles';

  const theme = createTheme(deepmerge(options1, options2));
*/

import { orange, brown, blue } from "@mui/material/colors";
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
			gradientBackground: `linear-gradient(to bottom, white, ${orange[100]}, ${blue[100]})`,
			gradientBackgroundBack: `linear-gradient(180deg, ${blue[100]}, ${orange[100]})`,
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
						fontSize: "20px",
					},
					[theme.breakpoints.up("md")]: {
						fontSize: "32px",
					},
					[theme.breakpoints.up("lg")]: {
						fontSize: "50px",
					},
				}),
				body1: ({ theme }) => ({
					fontSize: "16px",

					color: theme.palette.text.primary,

					[theme.breakpoints.up("sm")]: {
						fontSize: "16px",
					},
					[theme.breakpoints.up("md")]: {
						fontSize: "22px",
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
				{
					props: { variant: "greeter" },
					style: {
						minHeight: "50vh",
						height: "50vh",
						"@media (min-width:600px)": {
							minHeight: "100vh",
							height: "100vh",
						},
						"@media (min-width:960px)": {
							minHeight: "100vh",
							height: "100vh",
						},
						"@media (min-width:1280px)": {
							minHeight: "120vh",
							height: "100vh",
						},
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
