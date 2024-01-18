import {
	Box,
	Grid,
	Stack,
	Typography,
	TextareaAutosize,
	Button,
	Table,
	TableContainer,
	TableCell,
	TableHead,
	TableRow,
	TableBody,
	Paper,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import CarouselCard from "../../components/Card/CarouselCard";
import GradientButton from "../../components/buttons/MainButton";

export const SubmitedForm = styled(Box)(({ theme }) => ({
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
	resize: "none",
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

// import {
// 	Table,
// 	TableContainer,
// 	TableCell,
// 	TableHead,
// 	TableRow,
// 	TableBody,
// 	Paper,
// } from "@mui/material";
// import { styled } from "@mui/material/styles";

export const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
	borderRadius: "20px",
	margin: "28px 10px",
	backgroundColor: "#000", // Black background
	[theme.breakpoints.down("md")]: {
		margin: "20px 10px",
	},
	[theme.breakpoints.down("sm")]: {
		width: "100%",
	},
}));

export const StyledTable = styled(Table)(({ theme }) => ({
	borderCollapse: "collapse",
	width: "100%",
}));

export const StyledTableHead = styled(TableHead)(({ theme }) => ({
	backgroundColor: "#333", // Dark gray for headers
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
	"&:nth-of-type(odd)": {
		backgroundColor: "#111 ", // Slightly darker rows for better visibility
	},
	"&:hover": {
		backgroundColor: "#444", // On hover color
	},
}));

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
	padding: "16px",
	textAlign: "left",
	border: "1px solid #222", // Darker border
	color: "#fff", // White text
}));

export const CopyRowButton = styled(Button)(({ theme }) => ({
	marginLeft: "10px",
	color: "#fff", // White text
	backgroundColor: "#333",
	"&:hover": {
		backgroundColor: "#444",
	},
}));
