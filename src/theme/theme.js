import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 900,
			lg: 1440,
			xl: 1536,
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
		fontWeight: "400",
		fontFamily: "Quantico",
		body1: {
			fontSize: "14px",

			fontStyle: "normal",
			lineHeight: 2.4,
			margin: 0,
			marginBottom: "0",
			color: "#C0C1C2",
			textTransform: "uppercase",
		},
		h1: {
			fontWeight: 700,
			fontSize: "34px",
			lineHeight: "36px",
			background:
				"linear-gradient(90.7deg, #FFFFFF -0.78%, rgba(255, 255, 255, 0.45) 125.46%)",
			backgroundClip: "text",
			WebkitBackgroundClip: "text",
			color: "transparent",
			textTransform: "uppercase",
			marginBottom: "20px",
		},
		h1GradientLight: {
			fontWeight: 700,
			fontSize: "34px",
			lineHeight: 3.6,
			background: "linear-gradient(90.28deg, #FF0D1C -2.34%, #FFFFFF 88.65%)",
			backgroundClip: "text",
			WebkitBackgroundClip: "text",
			color: "transparent",
			textTransform: "uppercase",
		},
		h1GradientStrong: {
			fontWeight: 700,
			fontSize: "34px",
			lineHeight: 3.6,
			background:
				"linear-gradient(93.74deg, #D42530 2.68%, #F10413 52.05%, #490005 104.6%)",
			backgroundClip: "text",
			WebkitBackgroundClip: "text",
			color: "transparent",
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
