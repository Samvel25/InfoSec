import { Typography } from "@mui/material";
import { Navigation, NavigationItem } from "../style";
// import { NavigationItem } from "../style";
import { styled } from "@mui/material/styles";

export const DrawerNavigationWrapper = styled(Navigation)(({ theme }) => ({
	display: "block",
	marginLeft: "20px",
}));

export const DrawerNavigationItem = styled(NavigationItem)(({ theme }) => ({
	textTransform: "uppercase",
	textDecoration: "none",

	[theme.breakpoints.up("xs")]: {
		height: "auto",
		padding: "10px 20px ",
	},

	// "&:active": {
	// 	background: "transparent",
	// },

	"&:active > p": {
		color: "#D42530", // Active color
	},

	"& p": {
		userSelect: "none",
		// display: "block",
	},

	"&:hover": {
		"&:after": {
			display: "none",
		},
	},

	"&.active": {
		"&:after": {
			display: "none",
		},
		"& p": {
			color: "#D42530",
		},
	},
}));
