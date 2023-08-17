import { AppBar, Box, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ReactComponent as UserSvg } from "../../../media/svg/user.svg";
import { Drawer } from "@mui/material";
import { ReactComponent as LogoSvg } from "../../../media/logo/Logo.svg";

export const LogoWrapper = styled("a")(({ theme }) => ({
	display: "flex",
}));

export const Logo = styled(LogoSvg)(({ theme }) => ({
	width: "182px",
	height: "39px",
	[theme.breakpoints.down("sm")]: {
		width: "132px",
		height: "30px",
	},
	[theme.breakpoints.up("xl")]: {
		width: "218px",
		height: "47px",
	},
	[theme.breakpoints.up("xxl")]: {
		width: "255px",
		height: "55px",
	},
}));

export const BurgerMenu = styled(Drawer)(({ theme }) => ({
	"& .MuiDrawer-paper": {
		marginTop: "73px",
		paddingTop: "70px",
		width: "max-content",
		background: "transparent",
		position: "relative",
		overflow: "visible", // Customize the background color
	},
}));

export const ContactNavigation = styled(Box)({
	position: "absolute",
	transform: "translateX(50%)",
	left: "-105%",
	width: "280%",
	bottom: "85px",
});

export const UserLogo = styled(UserSvg)({
	cursor: "pointer",
});

export const Header = styled(AppBar)(({ theme }) => ({
	position: "fixed",
	background: "transparent",

	width: "100%",
	boxShadow: "none",
	"&: hover": {
		background: "rgba(0, 0, 0, 0.95)",
		borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
		boxShadow:
			"0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
		[theme.breakpoints.down("sm")]: {
			background: "none",
			borderBottom: "none",
			boxShadow: "none",
		},
	},
	[theme.breakpoints.down("sm")]: {
		background: "rgba(0, 0, 0, 0.95)",
		borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
	},
}));

export const HeaderWrapper = styled(Header)(({ theme }) => ({
	position: "fixed",
	padding: "0",
	height: "max-content",
}));

export const HeaderContent = styled(Stack)(({ theme }) => ({
	background:
		"linear-gradient(rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.008) )",
	backdropFilter: " blur(5px) saturate(100%)",
}));
