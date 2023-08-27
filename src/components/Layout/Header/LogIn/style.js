import { styled } from "@mui/material/styles";
import { Box, TextField } from "@mui/material";
import { Height } from "@mui/icons-material";

export const Form = styled(Box)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	background: "rgba(0, 0, 0, 0.64)",
	backdropFilter: "blur(19.0734px)",
	gap: theme.spacing(2),
	marginBottom: "0",
	maxWidth: "500px",
	[theme.breakpoints.up("xl")]: {
		maxWidth: "500px",
	},
	[theme.breakpoints.up("xxl")]: {
		maxWidth: "600px",
	},
}));

export const LogoContainer = styled(Box)(({ theme }) => ({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	marginBottom: "100px",
	width: "300px",
	height: "65px",
	[theme.breakpoints.up("xl")]: {
		width: "350px",
		height: "76px",
	},
	[theme.breakpoints.up("xxl")]: {
		width: "400px",
		height: "87px",
	},
}));

export const Input = styled(TextField)(({ theme }) => ({
	"& .MuiInput-root": {
		color: theme.palette.common.white,
		"&::after, &::before": {
			borderBottomColor: theme.palette.common.white,
		},
	},
	"& .MuiInput-underline:hover:not(.Mui-disabled):before": {
		borderBottomColor: theme.palette.common.white,
	},
	width: "100%",
	borderRadius: "4px",
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
