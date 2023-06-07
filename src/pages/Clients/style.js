import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import RadLine from "../../media/radLine.svg";
import GrayLine from "../../media/grayLine.svg";
import Card from "../../components/Card/CarouselCard";

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
		// transform: "translateY(100%)",
		[theme.breakpoints.down("md")]: {
			width: "265px",
			height: "45px",
			bottom: "30px",
		},
	},
	// [theme.breakpoints.up("md")]: {
	// 	minWidth: "400px",
	// },
}));

export const GoalCard = styled(Card)(({ theme }) => ({
	"&:after": {
		clipPath:
			"polygon(0 32.00px,32.00px 0,calc(100% - 32.00px) 0,100% 32.00px,100% calc(100% - 32.00px),calc(100% - 32.00px) 100%,32.00px 100%,0 calc(100% - 32.00px))",
	},
	// [theme.breakpoints.up("md")]: {
	// 	minWidth: "400px",
	// },
}));
