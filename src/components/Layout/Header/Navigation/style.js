import { styled } from "@mui/material/styles";
import { NavLink } from "react-router-dom";

export const Navigation = styled("nav")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
}));

export const NavigationItem = styled(NavLink)(({ theme }) => ({
	textTransform: "uppercase",
	textDecoration: "none",
	padding: "0 20px",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",

	"&.active": {},
	"&.active > p": {
		color: "#D42530",
	},

	"& p": {
		"&:hover": {
			color: "#D42530",
		},
	},

	[theme.breakpoints.up("md")]: {
		height: "84px",
	},
	[theme.breakpoints.up("xl")]: {
		height: "96px",
	},
	[theme.breakpoints.up("xxl")]: {
		height: "105px",
	},
	[theme.breakpoints.down(1150)]: {
		padding: "0 9px",
	},
}));
