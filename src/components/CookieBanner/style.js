import { styled } from "@mui/system";
import { Dialog, DialogTitle, DialogContent, Button } from "@mui/material";

export const StyledDialog = styled(Dialog)(({ theme }) => ({
	"& .MuiPaper-root": {
		backgroundColor: "#1F1F1F",
		color: "#F7F7F7",
		borderRadius: "10px",
		padding: "1.5rem",
		[theme.breakpoints.down("xs")]: {
			padding: "1rem",
			borderRadius: "8px",
		},
	},
}));

export const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
	borderBottom: "3px solid #3F3F3F",
	padding: "0.5rem 1rem",
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	"& h2": {
		fontSize: "1.5rem",
	},
	[theme.breakpoints.down("xs")]: {
		"& h2": {
			fontSize: "1.2rem",
		},
		padding: "0.4rem 0.8rem",
	},
}));

export const StyledDialogContent = styled(DialogContent)(({ theme }) => ({
	padding: "1rem",
	"& p": {
		fontSize: "1rem",
		margin: "1rem 0",
	},
	[theme.breakpoints.down("xs")]: {
		padding: "0.8rem",
		"& p": {
			fontSize: "0.9rem",
			margin: "0.5rem 0",
		},
	},
}));

export const StyledButton = styled(Button)(({ theme }) => ({
	backgroundColor: "#00BFFF",
	color: "#FFF",
	padding: "8px 12px",
	[theme.breakpoints.down("xs")]: {
		padding: "6px 10px",
		fontSize: "0.8rem",
	},
}));

export const CancelButton = styled(Button)(({ theme }) => ({
	color: "#FFF",
	padding: "8px 12px",
	[theme.breakpoints.down("xs")]: {
		padding: "6px 10px",
		fontSize: "0.8rem",
	},
}));
