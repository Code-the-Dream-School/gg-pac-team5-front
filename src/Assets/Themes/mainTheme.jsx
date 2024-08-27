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

const mainTheme = createTheme({
	customVariables: {
		appBarMinHeight: 10,
	},
	palette: {
		primary: {
			main: orange[100],
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
					props: { variant: "container60vh" },
					style: {
						height: "60vh",
					},
				},
			],
		},
	},
});

export { mainTheme };
