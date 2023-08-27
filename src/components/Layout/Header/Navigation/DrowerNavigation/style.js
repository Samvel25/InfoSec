import { Navigation, NavigationItem } from "../style";
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

	"&:active > p": {
		color: "#D42530",
	},

	"& p": {
		userSelect: "none",
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
