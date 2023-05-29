import { AppBar } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ReactComponent as UserSvg } from "../../../media/user.svg";
import { NavLink } from "react-router-dom";
import { Drawer } from "@mui/material";

export const Logo = styled("a")(({ theme }) => ({
	display: "flex",
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
		width: "250px",
		background: "linear-gradient(45deg,#575757,#616161,#292929)", // Customize the background color
	},
}));

export const UserLogo = styled(UserSvg)({
	cursor: "pointer",
});

export const Header = styled(AppBar)({
	borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
});
