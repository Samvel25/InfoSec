import { createTheme } from "@mui/material/styles";

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
	"@media (min-width:1930px)": {
		fontSize: "42px",
		lineHeight: "45px",
	},
	"@media (min-width:2800px)": {
		fontSize: "50px",
		lineHeight: "55px",
	},
};

export const theme = createTheme({
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 1000,
			lg: 1250,
			xl: 1930,
			xxl: 2800,
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
			"--dynamic-font-size": "14px",
			fontSize: "var(--dynamic-font-size)",
			fontStyle: "normal",
			lineHeight: "24px",
			margin: 0,
			marginBottom: "0",
			color: "#C0C1C2",
			"@media (min-width:1930px)": {
				fontSize: "16px",
				lineHeight: "28px",
			},
			"@media (min-width:2800px)": {
				fontSize: "19px",
				lineHeight: "32px",
			},
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
			"@media (min-width:1930px)": {
				fontSize: "20px",
				lineHeight: "25px",
			},
			"@media (min-width:2800px)": {
				fontSize: "24px",
				lineHeight: "30px",
			},
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
			"@media (min-width:1930px)": {
				fontSize: "20px",
				lineHeight: "25px",
			},
			"@media (min-width:2800px)": {
				fontSize: "24px",
				lineHeight: "30px",
			},
		},
		CardRate: {
			fontWeight: 400,
			fontSize: "31px",
			lineHeight: "28px",

			"@media (max-width:600px)": {
				fontSize: "28px",
			},
			"@media (min-width:1930px)": {
				fontSize: "35px",
				lineHeight: "33px",
			},
			"@media (min-width:2800px)": {
				fontSize: "38px",
				lineHeight: "39px",
			},
		},
		CardDescription: {
			background:
				"linear-gradient(92.98deg, #575757 2.17%, #616161 42.05%, #292929 84.51%)",
			"--dynamic-font-size": "12px",
			fontSize: "var(--dynamic-font-size)",
			lineHeight: "21px",
			marginBottom: "17px",
			display: "block",
			...gradientText,
			textTransform: "none",

			"@media (min-width:1930px)": {
				"--dynamic-font-size": "13px",
				fontSize: "var(--dynamic-font-size)",
				lineHeight: "23px",
			},
			"@media (min-width:2800px)": {
				"--dynamic-font-size": "18px",
				fontSize: "var(--dynamic-font-size)",
				lineHeight: "29px",
			},
		},
		CardHead: {
			color: "#FFFFFF",
			marginBottom: "25px",
			"--dynamic-font-size": "20px",
			fontSize: "var(--dynamic-font-size)",
			lineHeight: "31px",
			fontWeight: 700,
			display: "block",
			"@media (min-width:1930px)": {
				"--dynamic-font-size": "24px",
				fontSize: "var(--dynamic-font-size)",
				lineHeight: "37px",
			},
			"@media (min-width:2800px)": {
				"--dynamic-font-size": "29px",
				fontSize: "var(--dynamic-font-size)",
				lineHeight: "44px",
			},
		},
		FooterHead: {
			color: "#FFFFFF",
			fontSize: "16px",
			lineHeight: "22px",
			marginBottom: "20px",
			textDecoration: "none",
			display: "block",
			"@media (min-width:1930px)": {
				fontSize: "20px",
				lineHeight: "26px",
			},
			"@media (min-width:2800px)": {
				fontSize: "24px",
				lineHeight: "31px",
			},
		},
		FooterLink: {
			marginBottom: "10px",
			color: "#C0C1C2",
			fontSize: "14px",
			lineHeight: "24px",
			textDecoration: "none",
			display: "block",
			transformOrigin: "left center",
			"&:hover": {
				transform: "scale(1.15)",
				color: "#FFFFFF",
			},
			"@media (min-width:1930px)": {
				fontSize: "15px",
				lineHeight: "27px",
			},
			"@media (min-width:2800px)": {
				fontSize: "18px",
				lineHeight: "30px",
			},
		},

		ButtonNew: {
			fontSize: "12px",
			lineHeight: "25px",
			fontWeight: 700,
			color: "#FFFFFF",
			textDecoration: "none",
			textTransform: "uppercase",
			display: "inline-block",
			"@media (min-width:1930px)": {
				fontSize: "15px",
				lineHeight: "31px",
			},
			"@media (min-width:2800px)": {
				fontSize: "18px",
				lineHeight: "37px",
			},
		},
	},
	components: {
		MuiDialog: {
			styleOverrides: {
				paper: {
					backgroundColor: "none !important",
				},
			},
		},

		MuiCheckbox: {
			styleOverrides: {
				root: {
					checked: {
						color: "red",
					},
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
	},
});
