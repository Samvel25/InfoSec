import { Typography } from "@mui/material";
import { Navigation } from "./style";
import { NavigationItem } from "./style";
import { styled } from "@mui/material/styles";

export const DrawerNavigationWrapper = styled(Navigation)(({ theme }) => ({
	display: "block",
	marginLeft: "20px",
}));

export const DrawerNavigationItem = styled(NavigationItem)(({ theme }) => ({
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
}));

function DrawerNavigation() {
	return (
		<DrawerNavigationWrapper>
			<DrawerNavigationItem to="/">
				<Typography>HOME</Typography>
			</DrawerNavigationItem>
			<DrawerNavigationItem to="/about">
				<Typography>ABOUT US</Typography>
			</DrawerNavigationItem>
			<DrawerNavigationItem to="/contact">
				<Typography>SERVICES</Typography>
			</DrawerNavigationItem>
			<DrawerNavigationItem to="/contact">
				<Typography>SERVICES</Typography>
			</DrawerNavigationItem>
			<DrawerNavigationItem to="/contact">
				<Typography>SERVICES</Typography>
			</DrawerNavigationItem>
		</DrawerNavigationWrapper>
	);
}
export default DrawerNavigation;
