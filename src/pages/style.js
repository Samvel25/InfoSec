import { Box, Grid, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import RadLine from "../media/radLine.svg";
import GrayLine from "../media/grayLine.svg";
import Net from "../media/net.svg";
import CarouselCard from "../components/Card/CarouselCard";

export const ScaledSectionStyles = {
	transform: "scale(0.9) translate(40%, 25%)",
	transition: "transform 0.3s ease-in-out",
	borderRadius: "20px",
	boxShadow:
		"0 0 6px 4px rgba(212, 37, 48, 0.4), " +
		"0 0 12px 8px rgba(212, 37, 48, 0.3), " +
		"0 0 18px 12px rgba(212, 37, 48, 0.2), " +
		"0 0 24px 16px rgba(241, 4, 19, 0.4), " +
		"0 0 30px 20px rgba(241, 4, 19, 0.3), " +
		"0 0 36px 24px rgba(73, 0, 5, 0.4), " +
		"0 0 42px 28px rgba(73, 0, 5, 0.6)",
};

export const grayLines = {
	backgroundImage: `url(${GrayLine})`,
	width: "320px",
	height: "65px",
	content: '""',
	zIndex: 1,
	position: "absolute",
	backgroundRepeat: " no-repeat",
	backgroundSize: "contain",
};

export const radLines = {
	backgroundImage: `url(${RadLine})`,
	width: "320px",
	height: "65px",
	content: '""',
	zIndex: 1,
	position: "absolute",
	backgroundRepeat: " no-repeat",
	backgroundSize: "contain",
};

export const HeadText = styled("div")({
	position: "absolute",
	content: "''",
	transform: "translate(-50%, -50%)",
	top: 0,
	left: "50%",
	background: "black",
	padding: "0 10px",
});

export const Achievements = styled(Box)(({ theme }) => ({
	borderTop: "1px solid rgba(255, 255, 255, 0.1)",
	position: "relative",
	display: "block",

	"&: before": {
		...grayLines,
		bottom: "10px",
		right: 0,
		[theme.breakpoints.down("md")]: {
			width: "265px",
			height: "45px",
		},
		[theme.breakpoints.down("sm")]: {
			bottom: "-20px",
		},
	},
}));

export const Description = styled(Box)(({ theme }) => ({
	width: "100%",
	display: "flex",
	justifyContent: "center",
	textAlign: "center",
	position: "relative",

	"&: before": {
		...radLines,
		left: 0,
		bottom: "-10px",
		transform: "translateY(100%)",
		[theme.breakpoints.down("md")]: {
			width: "265px",
			height: "45px",
			bottom: "-30px",
		},
	},
}));

export const DescriptionText = styled(Stack)(({ theme }) => ({
	width: "55%",
	[theme.breakpoints.down("md")]: {
		width: "100%",
	},
}));

export const Services = styled(Grid)(({ theme }) => ({
	borderTop: "1px solid rgba(255, 255, 255, 0.1)",
	position: "relative",
	"&:before": {
		position: "absolute",
		backgroundImage: `url(${Net})`,
		transform: "translate(-50%, -50%)",
		content: '""',
		zIndex: "-1",
		left: "0",
		top: "-70px",
		// maxWidth: "100%",
		width: "620px",
		height: "610px",
		opacity: "0.5",

		[theme.breakpoints.down("sm")]: {
			height: "500px",
			left: "0",
			top: "-16%",
		},
	},
	"&:after": {
		position: "absolute",
		backgroundImage: `url(${Net})`,
		transform: "rotate(-90deg) translate(-50%, -50%);",

		content: '""',
		zIndex: "-1",
		left: "100px",
		bottom: "40px",
		width: "786px",
		height: "610px",
		opacity: "0.7",
		[theme.breakpoints.down("md")]: {
			height: "500px",
			bottom: 0,
		},
		[theme.breakpoints.down(850)]: {
			bottom: "-10px",
		},
		[theme.breakpoints.down("sm")]: {
			bottom: "30px",
		},
		// [theme.breakpoints.down("sm")]: {
		// 	display: "none",
		// },
	},
	[theme.breakpoints.down("1300")]: {
		justifyContent: "space-around",
	},
	[theme.breakpoints.down("sm")]: {
		padding: "20px 0 0px",
	},
}));

export const ServicesCard = styled(CarouselCard)(({ theme }) => ({
	width: "auto",
	margin: "28px 10px",
	[theme.breakpoints.down("md")]: {
		margin: "20px 10px",
	},
	[theme.breakpoints.down("sm")]: {
		width: "100%",
	},
}));
