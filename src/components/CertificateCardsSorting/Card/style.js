import CarouselCard from "../../Card/CarouselCard";
import { styled } from "@mui/material/styles";
import GradientButton from "../../Buttons/MainButton";
import { Box, Typography } from "@mui/material";

export const SortingCard = styled(CarouselCard)(({ theme, scale }) => ({
	width: "auto",
	padding: "45px 15px 30px",
	// textAlign: "center",
	"&:after": {
		background: "#0a0a0a",
		clipPath:
			"polygon(0 16.00px,16.00px 0,100% 0,100% calc(100% - 16.00px),calc(100% - 16.00px) 100%,0 100%)",
	},
	[theme.breakpoints.down("sm")]: {
		maxWidth: "330px",
		padding: " 50px  10px 20px",
	},
}));

export const CertificateImg = styled("img")(({ theme }) => ({
	width: "150px",
	height: "115px",
	margin: "0 0px 50px",
}));
export const ButtonText = styled(Typography)(({ theme }) => ({
	textTransform: "uppercase",
	a: {
		background:
			"linear-gradient(93.74deg, #D42530 2.68%, #F10413 52.05%, #490005 104.6%)",
		backgroundClip: "text",
		WebkitBackgroundClip: "text",
		color: "transparent",
		textTransform: "uppercase",
	},
}));

export const Button = styled(GradientButton)(({ theme }) => ({
	width: "100%",
	background: "transparent",
	"& pre": {
		position: "absolute",
		background: "#0a0a0a",
		transform: "rotate(45deg)",
		height: "14px",
		width: "28px",
		left: "-9px",
		bottom: "-2px",

		margin: 0,
	},
	"& pre:first-of-type": {
		right: "-9px",
		top: "-2px",
		left: "auto",
		bottom: "auto",
	},
}));
