import FormBackground from "../../media/png/incidentBackground.png";
import { styled } from "@mui/material";
import { Box, Grid } from "@mui/material";
import { ScaledSectionStyles } from "../style";

export const FirstSection = styled(Grid)(({ theme, ismenuopen }) => ({
	...(ismenuopen && {
		...ScaledSectionStyles,
		[theme.breakpoints.down("md")]: {
			transform: "scale(0.6) translate(55%, -10%)",
		},
		[theme.breakpoints.down("sm")]: {
			transform: "scale(0.6) translate(55%, -15%)",
			// overflow: "visible",
		},
		[theme.breakpoints.up("xs")]: {
			padding: "20px 20px 20px 20px !important",
		},
	}),
}));

export const FormBackgroundBox = styled(Box)(({ theme }) => ({
	position: "relative",
	backgroundImage: `url(${FormBackground})`,
	width: "100%",
	backgroundSize: "cover",
	backgroundRepeat: "no-repeat",
	height: "960px",
	alignItems: "center",
	display: "flex",
	"& div": {
		filter: "inherit",
	},
	[theme.breakpoints.down("xl")]: {
		height: "64vw",
	},

	[theme.breakpoints.down(1130)]: {
		height: "max-content",
		backgroundSize: "cover",
		padding: "20px 0",
	},
}));
