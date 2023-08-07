import { styled } from "@mui/material/styles";

export const StyledRecaptchaWrapper = styled("div")(({ theme }) => ({
	display: "inline-block",
	padding: "10px",
	paddingLeft: "0",
	borderRadius: "4px",

	"& > div": {
		transform: "scale(0.85)", // Adjust scale as needed
		transformOrigin: "0 0",
		[theme.breakpoints.up("xl")]: {
			transform: "scale(1.2)",
			transformOrigin: "0 0",
		},
		[theme.breakpoints.up("xxl")]: {
			transform: "scale(1.4)",
			transformOrigin: "0 0",
		},
	},
}));
