import { styled } from "@mui/material/styles";
import { NavLink } from "react-router-dom";

export const Navigation = styled("nav")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
}));

export const NavigationItem = styled(NavLink)(({ theme }) => ({
	textTransform: "uppercase",
	position: "relative",
	textDecoration: "none",
	padding: "0 14px",
	margin: "0 3px",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	"&:after": {
		content: '""',
		position: "absolute",
		bottom: "0",
		transform: "translate(-50%)",
		left: "50%",
		width: "90%",
		height: "2px",
		background: "#B7040F",
		borderRadius: "4px",
		display: "none",
	},

	"&:hover": {
		"&:after": {
			display: "block",
		},
		"& p": {
			color: "#D42530",
		},
	},

	"&.active": {
		"&:after": {
			display: "block",
		},
		"& p": {
			color: "#D42530",
		},
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
