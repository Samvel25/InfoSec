import { Box, Grid, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";

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
