import CarouselCard from "../../Card/CarouselCard";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import CertificateButton from "../../Buttons/MainButton";

export const SortingCard = styled(CarouselCard)(({ theme, scale }) => ({
	width: "auto",
	padding: "45px 15px 30px",
	maxWidth: "340px",

	[theme.breakpoints.up("xl")]: {
		maxWidth: "370px",
		padding: "55px 17px 35px",
	},
	[theme.breakpoints.up("xxl")]: {
		maxWidth: "410px",
		padding: "60px 20px 38px",
	},

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
	[theme.breakpoints.up("xl")]: {
		width: "175px",
		height: "135px",
	},
	[theme.breakpoints.up("xxl")]: {
		width: "190px",
		height: "145px",
	},
}));
export const ButtonText = styled(Typography)(({ theme }) => ({
	margin: "0",
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

export const Button = styled(CertificateButton)(({ theme }) => ({
	display: "flex",
	position: "relative",
	zIndex: 0,
	textDecoration: "none",
	minWidth: "140px",
	width: "100%",
	background: "transparent",
	padding: "10px 40px !important",
	"&:hover": {
		background: "none",
	},
	"&:before": {
		content: '""',
		position: "absolute",
		inset: 0,
		zIndex: -1,
		clipPath:
			"polygon(0 0,calc(100% - 16.00px) 0,100% 16.00px,100% 100%,16.00px 100%,0 calc(100% - 16.00px),0 0,1px  1px ,1px calc(100% - 16.00px - 0.41px),calc(16.00px + 0.41px) calc(100% - 1px),calc(100% - 1px) calc(100% - 1px),calc(100% - 1px) calc(16.00px + 0.41px),calc(100% - 16.00px - 0.41px) 1px,1px 1px)",
		background: "linear-gradient(45deg,#575757,#616161,#292929)",
	},
}));
