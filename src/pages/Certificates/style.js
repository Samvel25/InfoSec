import { Box, Grid, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import CertificateBackground from "../../media/certificatesBackground.png";
import Net from "../../media/net2.svg";

export const CertificatesHead = styled(Box)(({ theme }) => ({
	position: "relative",
	backgroundImage: `url(${CertificateBackground})`,
	width: "100%",
	backgroundSize: "contain",
	backgroundRepeat: "no-repeat",
	paddingBottom: "34%",
	justifyContent: "center",
	display: "flex",
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

		[theme.breakpoints.down("md")]: {
			transform: "translate(-50%, -50%)",
			top: "50%",
			left: "50%",
			overflow: "visible",
		},
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
