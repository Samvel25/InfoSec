import { styled } from "@mui/material/styles";
import { ReactComponent as LogoSvg } from "../../../media/logo/secondaryLogo.svg";
import { ReactComponent as Line } from "../../../media/svg/footerLine.svg";
import { Grid, Box, Typography, Stack } from "@mui/material";
import { ReactComponent as FacebookLogo } from "../../../media/logo/facebookLogo.svg";
import { ReactComponent as InstagramLogo } from "../../../media/logo/instagramLogo.svg";
import { ReactComponent as TwitterLogo } from "../../../media/logo/twitterLogo.svg";

export const Logo = styled(LogoSvg)(({ theme }) => ({
	width: "125px",
	height: "26px",
	filter: "grayscale(100%)",
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
export const LineWrapper = styled(Grid)(({ theme }) => ({
	position: "relative",
	width: "100%",
}));

export const FooterLine = styled(Line)(({ theme }) => ({
	width: "100%",
	height: "64px",
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
	width: "63%",
	textAlign: "center",
	left: "50%",
	[theme.breakpoints.down(700)]: {
		transform: "translate(-50%, -80%) rotateX(180deg)",
		bottom: "0",
	},
	[theme.breakpoints.down("sm")]: {
		width: "90%",
	},
}));
