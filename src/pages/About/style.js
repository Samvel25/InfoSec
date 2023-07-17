import { Box, Grid, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ScaledSectionStyles } from "../style";

export const FirstSection = styled(Grid)(({ theme, ismenuopen }) => ({
	...(ismenuopen && {
		...ScaledSectionStyles,

		[theme.breakpoints.down("md")]: {
			transform: "scale(0.6) translate(55%, -10%)",
			// overflow: "visible",
		},
		[theme.breakpoints.down("sm")]: {
			transform: "scale(0.6) translate(55%, -15%)",
			// overflow: "visible",
		},
		[theme.breakpoints.up("xs")]: {
			padding: "20px 20px 40px 20px !important",

			// overflow: "visible",
		},
	}),
}));

export const Globe = styled(Box)(({ theme }) => ({
	[theme.breakpoints.down("md")]: {
		transform: "rotate(90deg)",
	},
}));

export const FightAgainstCybercrime = styled(Grid)(({ theme }) => ({
	borderTop: "1px solid rgba(255, 255, 255, 0.1)",
	position: "relative",
	padding: "50px 0 110px",
	// display: "block",
}));

export const ScaleAndShiftWrapper = styled("div")(({ theme, open }) => ({
	transform: open ? "scale(0.4) translateX(40vw)" : "none",
	transition: theme.transitions.create("transform", {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen,
	}),
}));
