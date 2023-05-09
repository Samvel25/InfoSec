import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
// import ProgresBarLine from "../../../media/progressBarLine.svg";
import DiamondAnimation from "../../media/diamondAnimation.svg";
import Net from "../../media/backgroundNet.svg";

//1 section*/*/*/*/*/*/

export const DiamondWraper = styled(Grid)(`
position: relative;
&:after {
	position: absolute;
	background-image: url(${Net});
	left: -30px;
	content: '';
	z-index: -1;
	top: 40px;
	width: 580px;
	height: 455px;
	opacity: 0.04;
	border-radius: 188px;
}
`);

export const Diamond = styled(Box)(`
	background-image: url(${DiamondAnimation});
	width: 508px; 
	height: 528px;
`);

export const MyLine = styled("span")({
	height: "18px",
	width: "0",
	background: "#3C3C3C",
	marginRight: "6.8px",
	borderLeft: "1px solid #3C3C3C",
});

export const WhyChooseUs = styled(Grid)({
	padding: "100px 0",
});

//2 section*/*/*/*/*/*/

export const Achievements = styled(Grid)(`
	border-top: 1px solid rgba(255, 255, 255, 0.1);
	position: relative;
	padding: 60px 0 100px;
`);

export const HeadText = styled("div")(`
	position: absolute;
	content: " ";
	transform: translate(-50%, -50%);
	top: 0;
	left: 50%;
	background: black;
	padding: 0 10px;
`);
