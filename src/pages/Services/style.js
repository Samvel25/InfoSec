import FormBackground from "../../media/incidentBackground.png";
import { styled } from "@mui/material";
import { Box } from "@mui/material";

export const FormBackgroundBox = styled(Box)(({ theme }) => ({
	position: "relative",
	backgroundImage: `url(${FormBackground})`,
	width: "100%",
	backgroundSize: "contain",
	backgroundRepeat: "no-repeat",
	height: "960px",
	alignItems: "center",
	display: "flex",
	// filter: "grayscale(100%)",
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
