import { Box, Grid, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import CertificateBackground from "../../media/certificatesBackground.png";
import Net from "../../media/net2.svg";
import { useMenuOpen } from "../../components/context/MenuOpenContext";
import { ScaledSectionStyles } from "../style";

export const CertificatesHead = styled(Box)(({ theme, isMenuOpen }) => ({
	position: "relative",
	backgroundImage: `url(${CertificateBackground})`,
	width: "100%",
	backgroundSize: "contain",
	paddingBottom: "34%",
	backgroundRepeat: "no-repeat",
	justifyContent: "center",
	display: "flex",
	zIndex: "1",
	...(isMenuOpen && {
		...ScaledSectionStyles,
		width: "150%",
		backgroundSize: "cover",
		paddingBottom: "100%",

		"& h1": {
			transform: "translate(-50%, -50%)",
			top: "50%",
		},

		[theme.breakpoints.down("md")]: {
			transform: "scale(0.6) translate(26%, -10%)",
		},
		[theme.breakpoints.down("sm")]: {},
	}),

	"&:after": {
		position: "absolute",
		backgroundImage: `url(${Net})`,
		maxWidth: "100%",
		right: "80px",
		content: '""',
		zIndex: "1",
		top: "-70px",
		width: "685px",
		height: "485px",
		borderTopLeftRadius: "50%",
		transform: "translateY(50%)",

		[theme.breakpoints.down("lg")]: {
			width: "685px",
			transform: "translate(-41%, -30%) rotate(180deg)",
			top: "50%",
			left: "50%",
		},
		[theme.breakpoints.down("md")]: {
			height: "260px",
		},
		[theme.breakpoints.down("sm")]: {
			display: "none",
		},
	},
	[theme.breakpoints.down("sm")]: {
		backgroundSize: "cover",
		paddingBottom: isMenuOpen ? "120%" : "70%",
		transform: isMenuOpen ? "scale(0.6) translate(27%, -5%)" : "none",
	},
}));

export const CertificatesHeadText = styled(Typography)(({ theme }) => ({
	position: "absolute",
	transform: "translateX(-50%)",
	left: "50%",
	top: "55%",
	// [theme.breakpoints.down("md")]: {
	// 	transform: "rotate(90deg)",
	// },
}));
