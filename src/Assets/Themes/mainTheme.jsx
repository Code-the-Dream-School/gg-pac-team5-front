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
	components: {
		MuiBox: {
			variants: [
				{
					props: { variant: "review" },
					style: {
						display: "grid",
						width: "30vw", // Default width
						// Apply responsive widths using breakpoints
						[`@media (max-width:600px)`]: {
							width: "100vw", // For mobile
						},
						[`@media (min-width:1200px)`]: {
							width: "20vw", // For extra large screens
						},
						border: "2px dashed black",
					},
				},
			],
		},
		MuiContainer: {
			variants: [
				{
					props: { variant: "dashed" },
					style: {
						border: `2px dashed ${orange[500]}`,
						background: orange[100],
						margin: 0,
					},
				},
			],
		},
	},
});

export { mainTheme };
