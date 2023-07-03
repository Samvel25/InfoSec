import { AppBar, Box, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ReactComponent as UserSvg } from "../../../media/svg/user.svg";
import { NavLink } from "react-router-dom";
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
}));

export const Navigation = styled("nav")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
}));

export const NavigationItem = styled(NavLink)(({ theme }) => ({
	textTransform: "uppercase",
	textDecoration: "none",
	padding: "0 20px",
	"&.active > p": {
		color: "#D42530", // Active color
	},

	"& p": {
		"&:hover": {
			color: "#D42530",
		},
	},
	[theme.breakpoints.down(1150)]: {
		padding: "0 9px",
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
	borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
	padding: "0 50px",

	[theme.breakpoints.down("md")]: {
		padding: "0 15px",
	},
	[theme.breakpoints.down("sm")]: {
		marginTop: "35px",
	},
}));

export const Boxx = styled(AppBar)(({ theme }) => ({
	position: "fixed",
	transform: "translateX(-50%)",
	left: "50%",
	maxWidth: "1440px",
}));
