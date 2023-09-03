import { TextareaAutosize, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledTextarea = styled(TextareaAutosize)(({ theme }) => ({
	width: "100%",
	padding: "12px",
	backgroundColor: "#000",
	color: "#fff",
	resize: "none",
	"&::placeholder": {
		color: "#ccc",
	},
}));

export const SendButton = styled(Button)(({ theme }) => ({
	background: "gray",
	color: "white",
	"&:hover": {
		background: "#000000",
	},
}));
