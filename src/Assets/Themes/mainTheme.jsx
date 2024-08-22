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
		MuiContainer: {
			variants: [
				{
					props: { variant: "dashed" },
					style: {
						border: `2px dashed ${orange[500]}`,
						height: `90vh`,
						background: orange[100],
						margin: 0,
					},
				},
				{
					props: { variant: "dashed", color: "purple" },
					style: {
						border: `2px dashed ${purple[500]}`,
					},
				},
				{
					props: { variant: "dashed", color: "red" },
					style: {
						border: `2px dashed ${red[500]}`,
					},
				},
			],
		},
	},
});

export { mainTheme };
