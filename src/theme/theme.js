import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
	breakpoints: {
		values: {
			lg: 1440,
		},
	},
	palette: {
		primary: {
			main: "#000000",
		},
		secondary: {
			main: "#D42530",
		},
		background: {
			default: "#000000",
		},
	},
	typography: {
		fontSize: 16,
		fontWeight: "400",
		body1: {
			fontSize: "14px",
			fontFamily: "Quantico",
			fontStyle: "normal",
			lineHeight: 2.4,
			margin: 0,
			marginBottom: "0",
		},
	},
	components: {
		MuiAppBar: {
			styleOverrides: {
				colorPrimary: {
					backgroundColor: "#000000",
				},
				root: {
					borderBottom: "0.9px solid rgba(255, 255, 255, 0.1)",
				},
			},
		},
		MuiButton: {
			styleOverrides: {
				root: {
					minWidth: "140px",
				},
			},
		},
		// MuiToolbar: {
		// 	styleOverrides: {
		// 		root: {
		// 			padding: "0px",
		// 		},
		// 	},
		// },
	},
});
