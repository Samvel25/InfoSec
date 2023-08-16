import { Typography } from "@mui/material";
import * as Styled from "./style";

function DrawerNavigation() {
	return (
		<Styled.DrawerNavigationWrapper>
			<Styled.DrawerNavigationItem to="/" exact>
				<Typography>home</Typography>
			</Styled.DrawerNavigationItem>
			<Styled.DrawerNavigationItem to="/about">
				<Typography>about us</Typography>
			</Styled.DrawerNavigationItem>
			<Styled.DrawerNavigationItem to="/services">
				<Typography>services</Typography>
			</Styled.DrawerNavigationItem>
			<Styled.DrawerNavigationItem to="/clients">
				<Typography>clients</Typography>
			</Styled.DrawerNavigationItem>
			<Styled.DrawerNavigationItem to="/certificates">
				<Typography>certificates</Typography>
			</Styled.DrawerNavigationItem>
			<Styled.DrawerNavigationItem to="/admin">
				<Typography>admin</Typography>
			</Styled.DrawerNavigationItem>
		</Styled.DrawerNavigationWrapper>
	);
}
export default DrawerNavigation;
