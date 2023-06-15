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
		"& h1": {
			transform: "translate(-50%, -50%)",

			top: "50%",
		},
		[theme.breakpoints.down("md")]: {
			transform: "scale(1.2) translate(55%, 50%)",
			// overflow: "visible",
		},
		[theme.breakpoints.down("sm")]: {
			transform: "scale(1.4) translate(55%, 50%)",
			// overflow: "visible",
		},
	}),
	// [theme.breakpoints.down("md")]: {
	// 	transform: "rotate(90deg)",
	// },
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
			// overflow: "visible",
		},
		[theme.breakpoints.down("md")]: {
			height: "260px",
			// overflow: "visible",
		},
		[theme.breakpoints.down("sm")]: {
			display: "none",
			// overflow: "visible",
		},
	},
	[theme.breakpoints.down("sm")]: {
		backgroundSize: "cover",
		paddingBottom: "70%",
		// overflow: "visible",
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
