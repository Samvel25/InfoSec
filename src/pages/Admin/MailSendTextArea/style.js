import { TextareaAutosize, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledTextarea = styled(TextareaAutosize)(({ theme }) => ({
	width: "100%",
	padding: "12px",
	backgroundColor: "#000", // Black background
	color: "#fff", // White text
	resize: "none",
	"&::placeholder": {
		color: "#ccc",
	},
}));

export const SendButton = styled(Button)(({ theme }) => ({
	position: "absolute",
	right: "10px",
	bottom: "50%px",
	transform: "translateY(50%)",
	background: "gray",
	color: "white",
	"&:hover": {
		background: "#000000",
	},
}));
