import { AppBar } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ReactComponent as UserSvg } from "../../../media/user.svg";
import { NavLink } from "react-router-dom";
import { Drawer } from "@mui/material";

export const Navigation = styled("nav")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
}));

export const NavigationItem = styled(NavLink)(({ theme }) => ({
	textTransform: "uppercase",
	textDecoration: "none",
	padding: "0 20px",

	"&:hover": {
		color: theme.palette.secondary.main,
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
