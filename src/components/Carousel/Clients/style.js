import { styled } from "@mui/material/styles";

export const LogoWraper = styled("span")(({ theme }) => ({
	width: "max-content",
	textAlign: "center",
	"& svg": {
		height: "22px",
		width: "115px",
		[theme.breakpoints.up(1921)]: {
			height: "29px",
			width: "150px",
		},
	},
}));
