import {
	Button,
	Table,
	TableContainer,
	TableCell,
	TableHead,
	TableRow,
} from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
	borderRadius: "5px",
	margin: "28px 10px",
	backgroundColor: "#000",
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
	backgroundColor: "#333",
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
	"&:nth-of-type(odd)": {
		backgroundColor: "#111 ",
	},
	"&:hover": {
		backgroundColor: "#444",
	},
}));

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
	padding: "16px",
	textAlign: "left",
	border: "1px solid #222",
	color: "#fff",
}));

export const CopyRowButton = styled(Button)(({ theme }) => ({
	marginLeft: "10px",
	color: "#fff",
	backgroundColor: "#333",
	"&:hover": {
		backgroundColor: "#444",
	},
}));
