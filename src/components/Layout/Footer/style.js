import { styled } from "@mui/material/styles";
import { ReactComponent as LogoSvg } from "../../../media/logo/secondaryLogo.svg";
import { ReactComponent as Line } from "../../../media/svg/footerLine.svg";
import { Grid, Typography, Stack, Container, Box } from "@mui/material";

export const FooterContainer = styled(Container)(({ theme }) => ({
	[theme.breakpoints.up(1940)]: {
		maxWidth: "1800px",
	},
	[theme.breakpoints.down(1940)]: {
		maxWidth: "none",
	},
	[theme.breakpoints.up("xxl")]: {
		maxWidth: "2300px",
	},
}));

export const Logo = styled(LogoSvg)(({ theme }) => ({
	width: "130px",
	height: "27px",
	filter: "grayscale(100%)",
	[theme.breakpoints.up("xl")]: {
		width: "160px",
		height: "33px",
	},
	[theme.breakpoints.up("xxl")]: {
		width: "200px",
		height: "41px",
	},
}));

export const SocialMedia = styled(Stack)(({ theme }) => ({
	"& svg": {
		width: "30px",
		height: "30px",
		filter: "grayscale(100%)",
		cursor: "pointer",
		"&:hover": {
			filter: "none",
		},
		[theme.breakpoints.up("xl")]: {
			width: "35px",
			height: "35px",
		},
		[theme.breakpoints.up("xxl")]: {
			width: "45px",
			height: "45px",
		},
	},
}));

export const FooterLinkes = styled(Grid)(({ theme }) => ({
	position: "relative",
	marginBottom: "50px",
	"& ul": {
		listStyleType: "none",
		paddingLeft: 0,
	},
}));
export const LineWrapper = styled(Box)(({ theme }) => ({
	position: "relative",
	width: "100vw",
}));

export const FooterLine = styled(Line)(({ theme }) => ({
	width: "100%",
	height: "auto",
	transform: " rotateY(180deg)",
	[theme.breakpoints.down("sm")]: {
		height: "26px",
	},
}));

export const ContactUs = styled(Grid)(({ theme }) => ({
	position: "relative",
}));

export const LineText = styled(Typography)(({ theme }) => ({
	position: "absolute",
	content: "''",
	color: "#FFF",
	transform: "translateX(-50%) rotateX(180deg)",
	bottom: "20px",
	width: "40%",
	textAlign: "center",
	left: "50%",
	[theme.breakpoints.up(2500)]: {
		bottom: "5px",
	},
	[theme.breakpoints.down(700)]: {
		width: "80%",
		transform: "translate(-50%, -80%) rotateX(180deg)",
		bottom: "0",
		fontSize: "12px",
	},
	[theme.breakpoints.down(500)]: {
		transform: "translate(-50%, -50%) rotateX(180deg)",
		width: "90%",
	},
}));
