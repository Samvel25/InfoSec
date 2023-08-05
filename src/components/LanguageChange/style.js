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
		[theme.breakpoints.up("xl")]: {
			padding: " 24px 12px",
			width: "384px",
		},

		[theme.breakpoints.up("xxl")]: {
			padding: " 29px 14.5px",
			width: "460px",
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
	[theme.breakpoints.up("xl")]: {
		padding: "12px",
	},

	[theme.breakpoints.up("xxl")]: {
		padding: "14.5",
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
