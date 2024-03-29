import { ReactComponent as SendIcon } from "../../media/svg/sendArrow.svg";
import { Box, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Container = styled(Box)`
	// margin-left: 0;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;

export const EmailInput = styled(TextField)(({ theme }) => ({
	width: "100%",
	borderRadius: "5px",
	background: "rgba(255, 255, 255, 0.05)",
	border: "1px solid rgba(255, 255, 255, 0.1)",
	position: "relative",
	marginBottom: "20px",
	"& .MuiInputBase-input": {
		color: "#FFF",
	},
	"& .MuiFormLabel-root.MuiInputLabel-root.Mui-focused": {
		color: "#FFF",
	},
	"& .MuiOutlinedInput-root": {
		"& fieldset": {
			borderColor: "rgba(255, 255, 255, 0.1)",
		},
		"&:hover fieldset": {
			borderColor: "rgba(255, 255, 255, 0.3)",
		},
		"&.Mui-focused fieldset": {
			borderColor: "rgba(255, 255, 255, 0.3)",
		},
	},
}));

export const SendArrow = styled(SendIcon)(({ theme }) => ({
	width: "16px",
	height: "16px",
	cursor: "pointer",
	[theme.breakpoints.up("xl")]: {
		width: "20px",
		height: "20px",
	},
	[theme.breakpoints.up("xxl")]: {
		width: "23px",
		height: "23px",
	},
}));

export const ErrorText = styled(Typography)(({ theme }) => ({
	color: "#FF0000",
}));
