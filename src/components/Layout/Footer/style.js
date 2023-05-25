import { styled } from "@mui/material/styles";
import { ReactComponent as LogoSvg } from "../../../media/Logo.svg";
import { ReactComponent as Line } from "../../../media/footerLine.svg";
import { Grid, Box, Typography } from "@mui/material";

export const Logo = styled(LogoSvg)(({ theme }) => ({
	width: "125px",
	height: "26px",
	filter: "grayscale(100%)",
}));

export const FooterLinkes = styled(Grid)(({ theme }) => ({
	position: "relative",
	marginBottom: "50px",
}));
export const LineWrapper = styled(Grid)(({ theme }) => ({
	display: "flex",
	position: "relative",
}));

export const FooterLineLeft = styled(Line)(({ theme }) => ({
	width: "50.5%",
	height: "64px",
	transform: " rotateY(180deg)",
	[theme.breakpoints.down("sm")]: {
		height: "26px",
	},
}));

export const FooterLineRight = styled(Line)(({ theme }) => ({
	width: "50.5%",
	height: "64px",
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

// export const MapWrapper = styled("Box")(({ theme }) => ({
// 	position: "relative",
// 	zIndex: 1,
// 	background: "rgba(0, 0, 0, 0.5)",
// }));

// export const GoogleMaps = styled("div")(({ theme }) => ({
// 	position: "absolute",
// 	top: "20px",
// 	bottom: "20px",
// 	left: "20px",
// 	right: "20px",
// 	background: "rgba(0, 0, 0, 0.0)",
// }));
// FooterLinkes
// translateY(100%)
