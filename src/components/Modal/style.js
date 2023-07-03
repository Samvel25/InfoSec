import Dialog from "@mui/material/Dialog";
import { styled } from "@mui/system";

export const Modal = styled(Dialog)(({ theme }) => ({
	"& .MuiPaper-root": {
		background: "none",
		maxWidth: "950px",
		border: "1px solid #C0C1C2",
		margin: "70px",
		[theme.breakpoints.down("sm")]: {
			margin: "25px",

			// overflow: "visible",
		},
	},
	"& .MuiContainer-root": {
		padding: "0",
	},
}));
