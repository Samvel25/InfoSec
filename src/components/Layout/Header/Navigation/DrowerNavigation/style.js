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
	padding: "0 20px",
	marginBottom: "20px",
	[theme.breakpoints.up("xs")]: {
		height: "auto",
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
		"&:hover": {
			color: "#D42530",
		},
	},
}));
