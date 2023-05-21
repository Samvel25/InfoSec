import { Box, Grid, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ReactComponent as DiamondAnimation } from "../../media/diamondAnimation.svg";
import Net1 from "../../media/backgroundNet.svg";
import Net from "../../media/net.svg";
import RadLine from "../../media/radLine.svg";
import GrayLine from "../../media/grayLine.svg";
import { ReactComponent as CardSquare } from "../../media/cardSquare.svg";
import CaruselCard from "../../components/Card/CarouselCard";

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
		[theme.breakpoints.down("md")]: {
			left: "35%",
			height: "500px",
			maxWidth: "80%",
		},
		[theme.breakpoints.down("sm")]: {
			display: "none",
		},
	},
}));

export const Services = styled(Grid)(({ theme }) => ({
	borderTop: "1px solid rgba(255, 255, 255, 0.1)",
	position: "relative",
	padding: "80px 0 130px",
	"&:before": {
		position: "absolute",
		backgroundImage: `url(${Net})`,
		transform: "translate(-100%, -50%)",
		content: '""',
		zIndex: "-1",
		left: "13%",
		top: "-10%",
		maxWidth: "100%",
		width: "620px",
		height: "610px",
		opacity: "0.6",

		[theme.breakpoints.down("sm")]: {
			height: "500px",
			left: "28%",
			top: "-16%",
		},
	},
	"&:after": {
		position: "absolute",
		backgroundImage: `url(${Net})`,
		transform: "rotate(-90deg) translateX(-50%);",

		content: '""',
		zIndex: "-1",
		left: "-10%",
		bottom: "10%",
		maxWidth: "80%",
		width: "786px",
		height: "610px",
		opacity: "0.6",
		[theme.breakpoints.down("md")]: {
			height: "500px",
			bottom: 0,
		},
		[theme.breakpoints.down("850")]: {
			bottom: "-5%",
		},
		[theme.breakpoints.down("sm")]: {
			display: "none",
		},
	},
	[theme.breakpoints.down("1300")]: {
		justifyContent: "space-around",
	},
	[theme.breakpoints.down("sm")]: {
		padding: "20px 0 0px",
	},
}));

export const CardSquareImg = styled(CardSquare)(({ theme }) => ({
	width: "62px",
	display: "block",

	height: "62px",
}));

export const ServicesCard = styled(CaruselCard)(({ theme }) => ({
	width: "auto",
	margin: "28px 10px",
	[theme.breakpoints.down("md")]: {
		margin: "20px 10px",
	},
	[theme.breakpoints.down("sm")]: {
		width: "100%",
	},
}));

//6 Section////////

export const Certificates = styled(Box)(({ theme }) => ({
	padding: "130px 0 80px",

	[theme.breakpoints.down("sm")]: {
		padding: "90px 0 120px",
	},
}));

export const CertificatesDescription = styled(Box)(({ theme }) => ({
	width: "100%",
	display: "flex",
	justifyContent: "center",
	textAlign: "center",
	position: "relative",

	"&: before": {
		...grayLines,
		left: 0,
		bottom: "-5px",
		transform: "translateY(100%) rotateY(180deg)",

		[theme.breakpoints.down("md")]: {
			width: "265px",
			height: "45px",
			bottom: "-15px",
		},
		[theme.breakpoints.down("700")]: {
			display: "none",
		},
	},
	"&: after": {
		...grayLines,
		right: 0,
		bottom: "-5px",
		transform: "translateY(100%)",

		[theme.breakpoints.down("md")]: {
			width: "265px",
			height: "45px",
			bottom: "-15px",
		},
		[theme.breakpoints.down("700")]: {
			display: "none",
		},
	},
}));

export const Maps = styled(Map)(({ theme }) => ({
	background: "black",
}));
// transform: "rotateY(180deg)",
