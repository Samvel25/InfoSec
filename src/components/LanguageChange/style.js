import { Menu, MenuItem, styled, keyframes } from "@mui/material";
import { ReactComponent as ArrowDown } from "../../media/svg/arrowDown.svg";
import { ReactComponent as Language } from "../../media/svg/language.svg";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(180deg);
  }
`;

export const StyledMenu = styled(Menu)(({ theme }) => ({
	"& .MuiList-root": {
		padding: 0,
	},
	"& .MuiPaper-root": {
		backgroundColor: "#000000",
		width: "max-content",
		borderRadius: "10px",
		borderTopLeftRadius: "0",
		position: "relative",
		overflow: "visible",
		border: "1px solid rgba(255, 255, 255, 0.1)",
		marginTop: theme.spacing(2),
		"& > *": {
			position: "relative",
			zIndex: 2,
		},
		[theme.breakpoints.up("xl")]: {},

		[theme.breakpoints.up("xxl")]: {},
	},
}));

export const StyledMenuItem = styled(MenuItem)(({ theme, isActive }) => ({
	width: "7vw",
	maxWidth: "230px",
	minWidth: "110px",

	background: isActive
		? "linear-gradient(45deg,#000000, #2D2D2D)"
		: "transparent",
	padding: "14px 22px 14px 10px",
	justifyContent: "space-between",
	position: "relative",
	zIndex: 2,
	"&:first-child": {
		borderTopRightRadius: "10px",
	},
	"&:last-child": {
		borderBottomRightRadius: "10px",
		borderBottomLeftRadius: "10px",
	},
	"&:hover": {
		background: isActive
			? "linear-gradient(45deg,#000000, #2D2D2D)"
			: "#070707",
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
	[theme.breakpoints.up("xl")]: {
		padding: "17px 23px 17px 12px",
	},

	[theme.breakpoints.up("xxl")]: {
		padding: "20px 25px 20px 15px",
	},
}));

export const StyledArrowDown = styled(ArrowDown)(({ theme, isopen }) => ({
	width: "10px",
	height: "6px",
	transform: isopen ? "rotateX(180deg)" : "rotateX(0)",
	transition: "transform 0.3s ease",
	animation: `${rotate} 1s linear`,
	[theme.breakpoints.up("xl")]: {
		width: "13px",
		height: "8px",
	},

	[theme.breakpoints.up("xxl")]: {
		width: "16px",
		height: "10px",
	},
}));

export const LanguageImg = styled(Language)(({ theme, isopen }) => ({
	width: "16px",
	height: "16px",
	[theme.breakpoints.up("xl")]: {
		width: "20px",
		height: "20px",
	},

	[theme.breakpoints.up("xxl")]: {
		width: "24px",
		height: "24px",
	},
}));
