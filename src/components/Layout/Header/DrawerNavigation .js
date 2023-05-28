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
			<DrawerNavigationItem to="/" exact>
				<Typography>home</Typography>
			</DrawerNavigationItem>
			<DrawerNavigationItem to="/about">
				<Typography>about us</Typography>
			</DrawerNavigationItem>
			<DrawerNavigationItem to="/services">
				<Typography>services</Typography>
			</DrawerNavigationItem>
			<DrawerNavigationItem to="/clients">
				<Typography>clients</Typography>
			</DrawerNavigationItem>
			<DrawerNavigationItem to="/certificates">
				<Typography>certificates</Typography>
			</DrawerNavigationItem>
		</DrawerNavigationWrapper>
	);
}
export default DrawerNavigation;
