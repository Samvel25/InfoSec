import { styled } from "@mui/material";
import { TextField } from "@mui/material";

export const StyledForm = styled("form")({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	"& .MuiTextField-root": {
		marginBottom: "1rem",
	},
	"& .MuiButton-root": {
		marginTop: "1rem",
	},
});

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
