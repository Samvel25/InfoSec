import { Menu, MenuItem, styled, keyframes } from "@mui/material";
import { ReactComponent as ArrowDown } from "../../media/svg/arrowDown.svg";
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(180deg);
  }
`;

export const StyledMenu = styled(Menu)(({ theme }) => ({
	"& .MuiPaper-root": {
		backgroundColor: "#000000",
		width: "320px",
		padding: " 20px 10px",
		borderRadius: "10px",
		position: "relative",
		overflow: "visible",
		border: "1px solid rgba(255, 255, 255, 0.1)",
		marginTop: theme.spacing(2),
		"& > *": {
			position: "relative",
			zIndex: 2,
		},
	},
}));

export const StyledMenuItem = styled(MenuItem)(({ theme, isActive }) => ({
	background: "#0A0A0A",
	justifyContent: "space-between",
	position: "relative",
	zIndex: 2,
	padding: "10px",
	marginBottom: "10px",
	"&:hover": {
		background: "#070707",
	},
	"&:last-child": {
		margin: "0",
	},
	"& li": {
		"&:hover": {
			"& p": {
				color: "#D42530",
			}, // Set text color on hover
		},
	},
	"& p": {
		paddingLeft: "10px",
		color: isActive ? "#FFFFFF" : "#C0C1C2",
	},
}));

export const StyledArrowDown = styled(ArrowDown)(({ isopen }) => ({
	transform: isopen ? "rotateX(180deg)" : "rotateX(0)",
	transition: "transform 0.3s ease",
	animation: `${rotate} 1s linear`,
}));
