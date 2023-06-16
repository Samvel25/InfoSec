import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Net1 from "../../media/backgroundNet.svg";
import Net from "../../media/net.svg";
import RadLine from "../../media/radLine.svg";
import GrayLine from "../../media/grayLine.svg";
import { ReactComponent as CardSquare } from "../../media/cardSquare.svg";
import { ScaledSectionStyles } from "../style";

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

export const FirstSection = styled(Grid)(({ theme, isMenuOpen }) => ({
	...(isMenuOpen && {
		...ScaledSectionStyles,
		[theme.breakpoints.down("md")]: {
			transform: "scale(0.6) translate(55%, -20%)",
			// overflow: "visible",
		},
		[theme.breakpoints.down("sm")]: {
			transform: "scale(0.6) translate(55%, -15%)",
			// overflow: "visible",
		},
		[theme.breakpoints.up("xs")]: {
			padding: "20px 20px 20px 20px !important",

			// overflow: "visible",
		},
	}),
}));

export const DiamondWraper = styled(Grid)(({ theme }) => ({
	position: "relative",
	textAlign: "end",
	"&:after": {
		position: "absolute",
		backgroundImage: `url(${Net1})`,
		maxWidth: "100%",
		content: '""',
		zIndex: "1",
		width: "580px",
		height: "455px",
		opacity: "0.04",
		borderRadius: "188px",
		transform: "translate(-50%, -50%)",
		top: "50%",
		left: "50%",
		[theme.breakpoints.down("md")]: {
			transform: "translate(-50%, -50%)",
			top: "50%",
			left: "50%",
			overflow: "visible",
		},
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

export const BigCardImgWrapper = styled(Box)(({ theme }) => ({
	[theme.breakpoints.down("md")]: {
		paddingTop: "40px",
	},
}));

export const ExportCyberSecurity = styled(Grid)(({ theme }) => ({
	position: "relative",

	"&: after": {
		...radLines,
		left: "0px",
		bottom: "50px",
		transform: "translateY(100%)",
		[theme.breakpoints.down("md")]: {
			width: "265px",
			height: "45px",
			bottom: "30px",
		},
	},
}));

export const ExportCyberSecurityDescription = styled(Grid)(({ theme }) => ({
	position: "relative",
	"&:after": {
		position: "absolute",
		backgroundImage: `url(${Net})`,
		transform: "translate(-50%, -50%)",
		// maxWidth: "100%",
		left: "1%",
		content: '""',
		zIndex: "-1",
		top: "3%",
		width: "620px",
		height: "610px",
		opacity: "0.4",
		[theme.breakpoints.down("sm")]: {
			top: "-15%",
			height: "500px",
			// display: "none",
		},
	},
}));

export const CyberSecurityServices = styled(Grid)(({ theme }) => ({
	position: "relative",
	"&: after": {
		...grayLines,
		right: "0px",
		bottom: "140px",
		transform: "translateY(100%)",
		[theme.breakpoints.down("md")]: {
			width: "265px",
			height: "45px",
		},
		[theme.breakpoints.down("md")]: {
			bottom: "40px",
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
		// maxWidth: "90%",

		// maxWidth: "100%",
		width: "620px",
		height: "610px",
		opacity: "0.4",
		[theme.breakpoints.down("md")]: {
			left: "35%",
			height: "500px",
			// maxWidth: "80%",
		},
		// [theme.breakpoints.down("sm")]: {
		// 	display: "none",
		// },
	},
}));

export const CardSquareImg = styled(CardSquare)(({ theme }) => ({
	width: "62px",
	display: "block",

	height: "62px",
}));

//6 Section////////

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
