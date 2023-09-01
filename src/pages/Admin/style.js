import {
	Box,
	Grid,
	Stack,
	Typography,
	TextareaAutosize,
	Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import CarouselCard from "../../components/Card/CarouselCard";
import GradientButton from "../../components/Buttons/MainButton";

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

export const StyledTextarea = styled(TextareaAutosize)(({ theme }) => ({
	width: "100%",
	padding: "12px",
	backgroundColor: "#000", // Black background
	color: "#fff", // White text
	"&::placeholder": {
		color: "#ccc",
	},
}));

export const SendButton = styled(Button)(({ theme }) => ({
	position: "absolute",
	right: "10px",
	bottom: "50%px",
	transform: "translateY(50%)",
	background: "gray",
	color: "white",
	"&:hover": {
		background: "#000000",
	},
}));
