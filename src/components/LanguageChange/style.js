import { Menu, MenuItem, styled, keyframes } from "@mui/material";
import { ReactComponent as ArrowDown } from "../../media/svg/arrowDown.svg";

const rotateGradient = keyframes`
0% {
	background-position: 0% 50%;
}
50% {
	background-position: 100% 0%;
}
100% {
	background-position: 0% 50%;
}
`;

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
		backgroundColor: "black",
		width: "200px",
		padding: theme.spacing(1),
		position: "relative",
		overflow: "visible",
		marginTop: theme.spacing(2),
		"&:before": {
			content: '""',
			position: "absolute",
			top: -1.5,
			right: -1.5,
			bottom: -1.5,
			left: -1.8,
			backgroundImage: "linear-gradient(45deg, #575757, #616161, #292929)",
			zIndex: -1,
			borderRadius: "inherit",
			backgroundSize: "200% 200%",
			boxSizing: "border-box",
			animation: `${rotateGradient} 1s linear infinite`,
		},
		"& ul": {
			position: "relative",
			zIndex: 2,
			padding: 0,
			margin: 0,
			"& li": {
				"&:hover": {
					"& p": {
						color: "#D42530",
					}, // Set text color on hover
				},
			},
		},
		"& > *": {
			position: "relative",
			zIndex: 2,
		},
	},
}));

export const StyledMenuItem = styled(MenuItem)(({ theme, isActive }) => ({
	padding: theme.spacing(2),
	justifyContent: "center",
	"& p": {
		color: isActive ? "#D42530" : "white",
	},
}));

export const StyledArrowDown = styled(ArrowDown)(({ isopen }) => ({
	transform: isopen ? "rotateX(180deg)" : "rotateX(0)",
	transition: "transform 0.3s ease",
	animation: `${rotate} 1s linear`,
}));
