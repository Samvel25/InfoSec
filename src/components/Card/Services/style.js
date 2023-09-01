import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ReactComponent as CardSquare } from "../../../media/svg/cardSquare.svg";
import CarouselCard from "../AnimatedCarouselCard";

export const Services = styled(Grid)(({ theme }) => ({
	position: "relative",
	[theme.breakpoints.down("1300")]: {
		justifyContent: "space-around",
	},
	[theme.breakpoints.down("sm")]: {
		padding: "20px 0 0px",
	},
}));

export const CardSquareImg = styled(CardSquare)(({ theme }) => ({
	display: "block",
	width: "45px",
	height: "45px",
	[theme.breakpoints.up("md")]: {
		width: "55px",
		height: "55px",
	},
	[theme.breakpoints.up("xl")]: {
		width: "62px",
		height: "62px",
	},
}));

export const Card = styled(CarouselCard)(({ theme }) => ({
	width: "auto",
	height: "260px",
	margin: "28px 10px",
	[theme.breakpoints.down("md")]: {
		margin: "20px 10px",
	},
	[theme.breakpoints.down("sm")]: {
		width: "100%",
	},
	[theme.breakpoints.up("xl")]: {
		padding: "40px 80px 40px 50px",
		height: "290px",
	},
	[theme.breakpoints.up("xxl")]: {
		height: "345px",
	},
}));
