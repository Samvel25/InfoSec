import { AppBar } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ReactComponent as UserSvg } from "../../../media/user.svg";
import { NavLink } from "react-router-dom";
import { Stack, Typography, IconButton, Drawer, Hidden } from "@mui/material";

export const Navigation = styled("nav")({
	display: "flex",
	alignItems: "center",
});

export const NavigationItem = styled(NavLink)(({ theme }) => ({
	textTransform: "uppercase",
	textDecoration: "none",
	padding: "0 20px",

	"&:hover": {
		color: theme.palette.secondary.main,
	},
}));

// export const BurgerMenu = styled(Drawer)(({ theme }) => ({
// 	background: "#000000",

// 	// "&:hover": {
// 	// 	color: theme.palette.secondary.main,
// 	// },
// }));

export const UserLogo = styled(UserSvg)({
	cursor: "pointer",
});

export const Header = styled(AppBar)({
	borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
});
