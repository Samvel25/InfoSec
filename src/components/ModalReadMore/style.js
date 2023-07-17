import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const ReadMore = styled(Box)(({ theme }) => ({
	background: "rgba(0, 0, 0, 0.64)",
	backdropFilter: "blur(19.0734px)",
	padding: "35px",
	// [theme.breakpoints.down("md")]: {
	// 	transform: "rotate(90deg)",
	// },
}));
