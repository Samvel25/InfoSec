import * as Styled from "./style";
import { Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

function Navigation({ isMenuOpen }) {
	return (
		<Styled.Navigation className={isMenuOpen ? "open" : ""}>
			<Styled.NavigationItem to="/" exact>
				<Typography>home</Typography>
			</Styled.NavigationItem>
			<Styled.NavigationItem to="/about">
				<Typography>about us</Typography>
			</Styled.NavigationItem>
			<Styled.NavigationItem to="/services">
				<Typography>services</Typography>
			</Styled.NavigationItem>
			<Styled.NavigationItem to="/clients">
				<Typography>clients</Typography>
			</Styled.NavigationItem>
			<Styled.NavigationItem to="/certificates">
				<Typography>certificates</Typography>
			</Styled.NavigationItem>
		</Styled.Navigation>
	);
}

export default Navigation;
