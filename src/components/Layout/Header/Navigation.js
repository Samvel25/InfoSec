import * as Styled from "./style";
import { Typography } from "@mui/material";
// import { styled } from "@mui/material/styles";

function Navigation({ isMenuOpen }) {
	return (
		<Styled.Navigation className={isMenuOpen ? "open" : ""}>
			<Styled.NavigationItem to="/">
				<Typography>HOME</Typography>
			</Styled.NavigationItem>
			<Styled.NavigationItem to="/about">
				<Typography>ABOUT US</Typography>
			</Styled.NavigationItem>
			<Styled.NavigationItem to="/contact">
				<Typography>SERVICES</Typography>
			</Styled.NavigationItem>
			<Styled.NavigationItem to="/contact">
				<Typography>SERVICES</Typography>
			</Styled.NavigationItem>
			<Styled.NavigationItem to="/contact">
				<Typography>SERVICES</Typography>
			</Styled.NavigationItem>
		</Styled.Navigation>
	);
}
export default Navigation;
