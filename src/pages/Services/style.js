import FormBackground from "../../media/incidentBackground.png";
import { styled } from "@mui/material";
import { Box } from "@mui/material";

export const FormBackgroundBox = styled(Box)(({ theme }) => ({
	backgroundImage: `url(${FormBackground})`,
	width: "100%",
	backgroundSize: "contain",
	backgroundRepeat: "no-repeat",
	height: "959px",
	alignItems: "center",
	display: "flex",
}));
