import { Box, Grid, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import CarouselCard from "../../components/Card/CarouselCard";

export const SubmitedForm = styled(Grid)(({ theme }) => ({
	position: "relative",
	[theme.breakpoints.down("1300")]: {
		justifyContent: "space-around",
	},
	[theme.breakpoints.down("sm")]: {
		padding: "20px 0 0px",
	},
}));

export const Card = styled(CarouselCard)(({ theme }) => ({
	width: "auto",
	margin: "28px 10px",
	[theme.breakpoints.down("md")]: {
		margin: "20px 10px",
	},
	[theme.breakpoints.down("sm")]: {
		width: "100%",
	},
}));

export const CardItems = styled(Box)(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	marginBottom: "30px",
}));

export const UserData = styled(Typography)(({ theme }) => ({
	marginLeft: "20px",
	whiteSpace: "nowrap",
	overflow: "hidden",
	textOverflow: "ellipsis",
}));
