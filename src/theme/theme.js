import { createTheme } from "@mui/material/styles";
// import createBreakpoints from "@mui/material/styles/createBreakpoints";

const gradientText = {
	backgroundClip: "text",
	WebkitBackgroundClip: "text",
	color: "transparent",
	textTransform: "uppercase",
};

const commonStyles = {
	...gradientText,
	fontWeight: 700,
	fontSize: "34px",
	lineHeight: "36px",
	marginBottom: "20px",
	"@media (max-width:600px)": {
		fontSize: "24px",
	},
};

export const theme = createTheme({
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 1000,
			lg: 1250,
			xl: 1440,
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
			lineHeight: "24px",
			margin: 0,
			marginBottom: "0",
			color: "#C0C1C2",
		},
		h1: {
			background:
				"linear-gradient(90.7deg, #FFFFFF -0.78%, rgba(255, 255, 255, 0.45) 125.46%)",
			...commonStyles,
		},
		GradientLight: {
			background: "linear-gradient(90.28deg, #FF0D1C -2.34%, #FFFFFF 88.65%)",
			...commonStyles,
		},
		GradientStrong: {
			background:
				"linear-gradient(93.74deg, #D42530 2.68%, #F10413 52.05%, #490005 104.6%)",
			...commonStyles,
		},
		Head: {
			fontWeight: 400,
			fontSize: "16px",
			lineHeight: "22px",
			color: "#C0C1C2",
			marginBottom: "45px",
			display: "inline",
		},
		GradientHead: {
			background:
				"linear-gradient(93.74deg, #D42530 2.68%, #F10413 52.05%, #490005 104.6%)",
			display: "inline",
			fontWeight: 400,
			fontSize: "16px",
			lineHeight: "22px",
			color: "#C0C1C2",
			marginBottom: "45px",
			...gradientText,
		},
		CardRate: {
			fontWeight: 400,
			fontSize: "31px",
			lineHeight: "28px",

			"@media (max-width:600px)": {
				fontSize: "28px",
			},
		},
		CardDescription: {
			background:
				"linear-gradient(92.98deg, #575757 2.17%, #616161 42.05%, #292929 84.51%)",
			fontSize: "12px",
			lineHeight: "21px",
			marginBottom: "17px",
			display: "block",
			...gradientText,
		},
		CardHead: {
			color: "#FFFFFF",
			marginBottom: "25px",
			fontSize: "20px",
			lineHeight: "31px",
			fontWeight: 700,
			display: "inline",
		},
		FooterHead: {
			color: "#FFFFFF",
			fontSize: "16px",
			lineHeight: "22px",
			marginBottom: "20px",
			textDecoration: "none",
			display: "block",
		},
		FooterLink: {
			marginBottom: "10px",
			color: "#C0C1C2",
			fontSize: "14px",
			lineHeight: "24px",
			textDecoration: "none",
			display: "block",
		},

		ButtonNew: {
			fontSize: "12px",
			lineHeight: "25px",
			fontWeight: 700,
			color: "#FFFFFF",
			textDecoration: "none",
			textTransform: "uppercase",
			display: "inline-block",
		},
	},
	components: {
		MuiCheckbox: {
			styleOverrides: {
				checked: {
					color: "red", // Change the color to your desired color
				},
			},
		},
		// MuiAppBar: {
		// 	styleOverrides: {
		// 		colorPrimary: {
		// 			backgroundColor: "#000000",
		// 		},
		// 		root: {
		// 			borderBottom: "px solid rgba(255, 255, 255, 0.1)",
		// 		},
		// 	},
		// },
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
