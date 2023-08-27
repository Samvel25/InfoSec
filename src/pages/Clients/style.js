import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import RadLine from "../../media/svg/radLine.svg";
import GrayLine from "../../media/svg/grayLine.svg";
import Card from "../../components/Card/CarouselCard";
import Net from "../../media/svg/net.svg";
import { ScaledSectionStyles } from "../style";

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

export const FirstSection = styled(Grid)(({ theme, ismenuopen }) => ({
	...(ismenuopen && {
		...ScaledSectionStyles,
		[theme.breakpoints.down("md")]: {
			transform: "scale(0.6) translate(55%, -10%)",
		},
		[theme.breakpoints.down("sm")]: {
			transform: "scale(0.6) translate(55%, -15%)",
		},
		[theme.breakpoints.up("xs")]: {
			padding: "20px 20px 20px 20px !important",
		},
	}),
}));

export const OurGoalsSection = styled(Grid)(({ theme }) => ({
	position: "relative",
	"&: after": {
		...grayLines,
		top: "140px",
		right: 0,
		[theme.breakpoints.down("md")]: {
			top: "40px",
			width: "265px",
			height: "45px",
		},
	},
	"&: before": {
		...radLines,
		left: 0,
		bottom: "110px",
		[theme.breakpoints.down("md")]: {
			width: "265px",
			height: "45px",
			bottom: "30px",
		},
	},
}));

export const GoalCard = styled(Card)(({ theme }) => ({
	"&:after": {
		clipPath:
			"polygon(0 32.00px,32.00px 0,calc(100% - 32.00px) 0,100% 32.00px,100% calc(100% - 32.00px),calc(100% - 32.00px) 100%,32.00px 100%,0 calc(100% - 32.00px))",
	},
}));

export const Review = styled(Box)(({ theme }) => ({
	position: "relative",
	"&:before": {
		position: "absolute",
		backgroundImage: `url(${Net})`,
		transform: "translate(-25%, -60%)",
		left: "0",
		content: '""',
		zIndex: "-1",
		top: "0",
		width: "620px",
		height: "610px",
		opacity: "0.7",
		[theme.breakpoints.down("md")]: {
			top: "100px",
			left: "-180px",
		},
		[theme.breakpoints.down("sm")]: {
			transform: "translate(-40%, -60%)",
			height: "500px",
		},
	},

	"&:after": {
		position: "absolute",
		backgroundImage: `url(${Net})`,
		transform: "translateY(50%)",
		right: "-50px",
		content: '""',
		zIndex: "-1",
		bottom: "50px",
		width: "620px",
		height: "610px",
		opacity: "0.7",
		[theme.breakpoints.down("md")]: {
			height: "500px",
		},
		[theme.breakpoints.down("sm")]: {
			transform: "translate(50%, 50%)",

			right: "40px",
		},
	},
}));
