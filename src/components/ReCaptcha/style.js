import { styled } from "@mui/material/styles";

export const StyledRecaptchaWrapper = styled("div")(({ theme }) => ({
	display: "inline-block",
	padding: "10px",
	paddingLeft: "0",
	borderRadius: "4px",

	"& > div": {
		transformOrigin: "left center",
		transform: "scale(0.85)", // Adjust scale as needed
		[theme.breakpoints.up("xl")]: {
			transform: "scale(1.1)",
			transformOrigin: "0 0",
		},
		[theme.breakpoints.up("xxl")]: {
			transform: "scale(1.2)",
			transformOrigin: "0 0",
		},
	},
}));
