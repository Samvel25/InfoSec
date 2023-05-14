import { Box, Grid, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ReactComponent as DiamondAnimation } from "../../media/diamondAnimation.svg";
import Net1 from "../../media/backgroundNet.svg";
import Net from "../../media/net.svg";
import RadLine from "../../media/radLine.svg";
import GrayLine from "../../media/grayLine.svg";
import { ReactComponent as CardSquare } from "../../media/cardSquare.svg";
import AchievementsCardWrapper from "../../components/Card/CaruselCard";

//1 section*/*/*/*/*/*/

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

export const DiamondWraper = styled(Grid)(({ theme }) => ({
	position: "relative",
	textAlign: "end",
	overflow: "hidden",
	[theme.breakpoints.down("md")]: {
		margin: "0 20px",
	},
	"&:after": {
		position: "absolute",
		backgroundImage: `url(${Net1})`,
		left: "6%",
		content: '""',
		zIndex: "-1",
		top: "10%",
		width: "580px",
		height: "455px",
		opacity: "0.04",
		borderRadius: "188px",
		[theme.breakpoints.down("md")]: {
			transform: "translate(-50%, -50%)",
			top: "50%",
			left: "50%",
			overflow: "visible",
		},
	},
}));

export const Diamond = styled(DiamondAnimation)(({ theme }) => ({
	width: "35vw",
	maxWidth: "510px",
	minWidth: "280px",
	height: "max-content",
	[theme.breakpoints.up("md")]: {
		minWidth: "400px",
	},
}));

export const MyLine = styled("span")({
	height: "18px",
	width: "0",
	background: "#3C3C3C",
	marginRight: "6.8px",
	borderLeft: "1px solid #3C3C3C",
});

// 2 section*/*/*/*/*/*/

export const Achievements = styled(Box)(({ theme }) => ({
	borderTop: "1px solid rgba(255, 255, 255, 0.1)",
	position: "relative",
	padding: "60px 0 140px",
	display: "block",
	textAlign: "center",
	"&: before": {
		...grayLines,
		bottom: "2%",
		right: 0,
		[theme.breakpoints.down("md")]: {
			width: "265px",
			height: "45px",
		},
	},
}));

export const Description = styled(Box)(({ theme }) => ({
	width: "100%",
	display: "flex",
	justifyContent: "center",
	position: "relative",

	"&: before": {
		...radLines,
		left: 0,
		bottom: "-10px",
		transform: "translateY(100%)",
		[theme.breakpoints.down("md")]: {
			width: "265px",
			height: "45px",
		},
	},
}));

export const DescriptionText = styled(Stack)(({ theme }) => ({
	paddingTop: "145px",
	width: "55%",
	[theme.breakpoints.down("md")]: {
		width: "100%",
	},
}));

export const HeadText = styled("div")({
	position: "absolute",
	content: "''",
	transform: "translate(-50%, -50%)",
	top: 0,
	left: "50%",
	background: "black",
	padding: "0 10px",
});

export const CardCarousel = styled(Box)(({ theme }) => ({
	alignItems: "center",
	marginTop: "135px",
}));

export const BigCardImg = styled("img")(({ theme }) => ({
	width: "38vw",
	maxWidth: "560px",
	minWidth: "320px",
	height: "max-content",
	[theme.breakpoints.up("md")]: {
		minWidth: "420px",
	},
}));

export const BigCardImgWrapper = styled(Box)(({ theme }) => ({
	[theme.breakpoints.down("md")]: {
		paddingTop: "40px",
	},
}));

export const ExportCyberSecurity = styled(Grid)(({ theme }) => ({
	position: "relative",
	padding: "100px 0",

	"&: after": {
		...radLines,
		left: "0px",
		bottom: "50px",
		transform: "translateY(100%)",
		[theme.breakpoints.down("md")]: {
			width: "265px",
			height: "45px",
		},
	},
}));

export const ExportCyberSecurityDescription = styled(Grid)(({ theme }) => ({
	position: "relative",

	"&:after": {
		position: "absolute",
		backgroundImage: `url(${Net})`,
		transform: "translate(-50%, -50%)",
		left: "1%",
		content: '""',
		zIndex: "-1",
		top: "3%",
		width: "620px",
		height: "610px",
		opacity: "0.6",

		[theme.breakpoints.down("sm")]: {
			top: "-15%",
			height: "500px",
		},
	},
}));

export const CyberSecurityServices = styled(Grid)(({ theme }) => ({
	position: "relative",
	padding: "100px 0 180px",
	"&: after": {
		...grayLines,
		right: "0px",
		bottom: "175px",
		transform: "translateY(100%)",
		[theme.breakpoints.down("md")]: {
			width: "265px",
			height: "45px",
		},
		[theme.breakpoints.down("md")]: {
			bottom: "140px",
		},
	},
}));

export const CyberSecurityServicesDescription = styled(Grid)(({ theme }) => ({
	position: "relative",
	"&:after": {
		position: "absolute",
		backgroundImage: `url(${Net})`,
		transform: "translateY(-50%)",
		content: '""',
		zIndex: "-1",
		left: "17%",
		top: "-17%",
		maxWidth: "90%",
		width: "620px",
		height: "610px",
		opacity: "0.6",
		[theme.breakpoints.down("sm")]: {
			top: "-20%",
			height: "500px",
		},
	},
}));

export const Services = styled(Grid)(({ theme }) => ({
	borderTop: "1px solid rgba(255, 255, 255, 0.1)",
	position: "relative",
	padding: "80px 0 130px",
}));

export const CardSquareImg = styled(CardSquare)(({ theme }) => ({
	width: "62px",
	display: "block",

	height: "62px",
}));

export const ServicesCard = styled(AchievementsCardWrapper)(({ theme }) => ({
	width: "auto",
	margin: "28px 10px",
	[theme.breakpoints.down("md")]: {
		margin: "20px 10px",
	},
	[theme.breakpoints.down("sm")]: {
		width: "100%",
	},
}));
