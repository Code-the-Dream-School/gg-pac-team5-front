/*
  Try not to expand this file
  if possible create separate file with you themes and import 
  it here and deep merge it with mainTheme

  TODO: talk with mentors about it

  import { deepmerge } from '@mui/utils';
  import { createTheme } from '@mui/material/styles';

  const theme = createTheme(deepmerge(options1, options2));
*/

import { orange, red, purple } from "@mui/material/colors";
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
			defaultText: "black",
		},
		secondary: {
			main: orange[200],
			defaultText: "black",
		},
	},
	components: {
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
		MuiContainer: {
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
				color: mainTheme.palette.primary.defaultText,
			},
			"a:hover": {
				color: mainTheme.palette.primary.defaultText,
			},
		}}
	/>
);

export { mainTheme, globalStyles };
